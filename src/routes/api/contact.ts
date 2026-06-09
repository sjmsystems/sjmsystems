import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const RECIPIENT = "sebajvr.gpt@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

const ContactSchema = z.object({
  nome: z.string().trim().min(1).max(120),
  azienda: z.string().trim().min(1).max(160),
  email: z.string().trim().email().max(255),
  messaggio: z.string().trim().min(20).max(5000),
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
          return Response.json(
            { ok: false, error: "Email service non configurato" },
            { status: 500 },
          );
        }

        let raw: unknown;
        try {
          raw = await request.json();
        } catch {
          return Response.json({ ok: false, error: "JSON non valido" }, { status: 400 });
        }

        const parsed = ContactSchema.safeParse(raw);
        if (!parsed.success) {
          return Response.json(
            { ok: false, error: "Dati non validi", issues: parsed.error.flatten() },
            { status: 400 },
          );
        }
        const { nome, azienda, email, messaggio } = parsed.data;

        const subject = `Nuova richiesta da ${nome} — ${azienda}`;
        const html = `
          <div style="font-family:Arial,sans-serif;line-height:1.55;color:#0F1424">
            <h2 style="margin:0 0 12px">Nuova richiesta dal sito SJM</h2>
            <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
            <p><strong>Azienda:</strong> ${escapeHtml(azienda)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Messaggio:</strong></p>
            <p style="white-space:pre-wrap;padding:12px;background:#f5f6fb;border-radius:8px">${escapeHtml(messaggio)}</p>
          </div>`;
        const text = `Nuova richiesta dal sito SJM\n\nNome: ${nome}\nAzienda: ${azienda}\nEmail: ${email}\n\nMessaggio:\n${messaggio}`;

        const res = await fetch(`${GATEWAY_URL}/emails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": RESEND_API_KEY,
          },
          body: JSON.stringify({
            from: "SJM Contact <onboarding@resend.dev>",
            to: [RECIPIENT],
            reply_to: email,
            subject,
            html,
            text,
          }),
        });

        if (!res.ok) {
          const body = await res.text();
          console.error("Resend send failed", res.status, body);
          return Response.json(
            { ok: false, error: "Invio non riuscito" },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
