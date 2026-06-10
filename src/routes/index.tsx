import { createFileRoute } from "@tanstack/react-router";
import bodyHtml from "../assets/sjm-body.html?raw";
import cssText from "../assets/sjm.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SJM Systems Engineering — Agenti AI per PMI italiane" },
      {
        name: "description",
        content:
          "Agenti AI custom per PMI italiane. Eliminiamo colli di bottiglia operativi con architetture costruite sui tuoi processi reali. Risultati in 30–60 giorni.",
      },
      {
        property: "og:title",
        content: "SJM Systems Engineering — Agenti AI per PMI italiane",
      },
      {
        property: "og:description",
        content:
          "Agenti AI costruiti sui tuoi processi. Nessuna soluzione generica. Risultati misurabili in 30–60 giorni.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sjmsystems.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://sjmsystems.lovable.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "SJM Systems Engineering",
              url: "https://sjmsystems.lovable.app/",
              description:
                "Progettiamo agenti AI custom per PMI italiane, costruiti sui processi reali del cliente e integrati negli strumenti già in uso.",
            },
            {
              "@type": "WebSite",
              name: "SJM Systems Engineering",
              url: "https://sjmsystems.lovable.app/",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const toggleChatbot = () => {
    window.dispatchEvent(
      new MessageEvent("message", {
        origin: "https://app.relevanceai.com",
        data: { name: "relevanceai-chat-bubble", type: "toggle" },
      }),
    );
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssText }} />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <button
        type="button"
        className="sjm-chat-launcher"
        aria-label="Apri chatbot"
        onClick={toggleChatbot}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 3.75c-4.56 0-8.25 3.22-8.25 7.2 0 2.18 1.1 4.13 2.84 5.45l-.48 2.74a.75.75 0 0 0 1.03.8l3.08-1.3c.57.1 1.17.16 1.78.16 4.56 0 8.25-3.22 8.25-7.2S16.56 3.75 12 3.75Zm-3.1 8.05a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1Zm3.1 0a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1Zm3.1 0a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1Z" />
        </svg>
      </button>
    </>
  );
}
