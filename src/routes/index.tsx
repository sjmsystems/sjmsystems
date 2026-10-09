import { createFileRoute } from "@tanstack/react-router";
import bodyHtml from "../assets/sjm-body.html?raw";
import cssText from "../assets/sjm.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SJM Systems Engineering — Sistemi operativi su misura per PMI" },
      {
        name: "description",
        content:
          "SJM Systems Engineering progetta sistemi operativi su misura integrati nei tuoi software aziendali per eliminare il lavoro manuale e darti il controllo sui numeri.",
      },
      {
        property: "og:title",
        content: "SJM Systems Engineering — Sistemi operativi su misura",
      },
      {
        property: "og:description",
        content:
          "Recupera tempo e fatturato, eliminando il lavoro manuale. Sistemi operativi integrati nei tuoi software aziendali.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sjmsystems.it/" },
    ],
    links: [
      { rel: "canonical", href: "https://sjmsystems.it/" },
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
              url: "https://sjmsystems.it/",
              description:
                "Progetto agenti AI custom per PMI italiane, costruiti sui processi reali del cliente e integrati negli strumenti già in uso.",
            },
            {
              "@type": "WebSite",
              name: "SJM Systems Engineering",
              url: "https://sjmsystems.it/",
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
