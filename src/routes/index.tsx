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
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssText }} />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
