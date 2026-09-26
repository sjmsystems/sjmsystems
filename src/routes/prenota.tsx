import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import cssText from "../assets/sjm.css?raw";

export const Route = createFileRoute("/prenota")({
  head: () => ({
    meta: [
      { title: "Prenota la tua Discovery Call — SJM Systems Engineering" },
      {
        name: "description",
        content:
          "Prenota 30 minuti di analisi operativa gratuita con Sebastián Mellace. Nessun pitch commerciale, solo analisi dei processi aziendali da automatizzare.",
      },
      {
        property: "og:title",
        content: "Prenota la tua Discovery Call — SJM Systems Engineering",
      },
      {
        property: "og:description",
        content:
          "Scegli giorno e ora per 30 minuti di analisi operativa dei tuoi processi aziendali con Sebastián Mellace.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sjmsystems.it/prenota" },
    ],
    links: [
      { rel: "canonical", href: "https://sjmsystems.it/prenota" },
      { rel: "preconnect", href: "https://assets.calendly.com" },
    ],
  }),
  component: Prenota,
});

function Prenota() {
  useEffect(() => {
    const existing = document.getElementById("calendly-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssText }} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        body {
          background-color: #F7F8FC !important;
          color: #0F1424 !important;
        }
        .prenota-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #F7F8FC;
          background-image:
            radial-gradient(1200px 600px at 80% -10%, rgba(123,94,167,0.12), transparent 60%),
            radial-gradient(900px 500px at -10% 25%, rgba(62,207,178,0.14), transparent 60%),
            linear-gradient(rgba(62, 207, 178, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(62, 207, 178, 0.12) 1px, transparent 1px);
          background-size: auto, auto, 56px 56px, 56px 56px;
          background-repeat: no-repeat, no-repeat, repeat, repeat;
        }
        .prenota-nav {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(10, 12, 18, 0.95);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid #1E2535;
        }
        .prenota-hero {
          padding-top: 60px;
          padding-bottom: 30px;
          text-align: center;
        }
        .prenota-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #178370;
          background: rgba(62, 207, 178, 0.14);
          border: 1px solid rgba(62, 207, 178, 0.35);
          padding: 6px 16px;
          border-radius: 999px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .prenota-title {
          font-family: var(--font-display, 'Space Grotesk', sans-serif);
          font-size: clamp(32px, 4.5vw, 50px);
          font-weight: 700;
          line-height: 1.15;
          color: #0F1424 !important;
          -webkit-text-fill-color: #0F1424 !important;
          max-width: 780px;
          margin: 0 auto 18px;
          letter-spacing: -0.02em;
        }
        .prenota-subtitle {
          font-family: var(--font-body, 'Inter', sans-serif);
          font-size: clamp(16px, 1.8vw, 18px);
          color: #4B5568 !important;
          -webkit-text-fill-color: #4B5568 !important;
          max-width: 660px;
          margin: 0 auto 36px;
          line-height: 1.65;
        }
        .prenota-pills-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-bottom: 40px;
        }
        .prenota-pill-item {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFFFFF;
          border: 1px solid rgba(228, 232, 242, 0.95);
          padding: 10px 18px;
          border-radius: 12px;
          font-size: 14px;
          font-family: var(--font-body, sans-serif);
          color: #1E2535;
          font-weight: 500;
          box-shadow: 0 4px 16px -4px rgba(15, 20, 36, 0.05);
        }
        .calendario-container {
          max-width: 1060px;
          margin: 0 auto 70px;
          width: 100%;
        }
        .calendario-container .calendly-inline-widget {
          width: 100% !important;
          min-width: 320px !important;
          height: 750px !important;
          min-height: 750px !important;
        }
        .calendario-container iframe {
          width: 100% !important;
          height: 750px !important;
          min-height: 750px !important;
          border: 0 !important;
          border-radius: 16px !important;
          box-shadow: 0 20px 50px -15px rgba(15, 20, 36, 0.1) !important;
        }
        .prenota-footer {
          margin-top: auto;
          background: #0A0C12;
          border-top: 1px solid #1E2535;
          padding: 32px 0;
          text-align: center;
          font-family: var(--font-mono, monospace);
          font-size: 12.5px;
          color: #8A99B5;
        }
      `,
        }}
      />

      <div className="prenota-page">
        {/* Navigation Bar coerente con sjmsystems.it */}
        <nav className="prenota-nav">
          <div className="container nav-inner">
            <a href="/" className="logo" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img
                src="/__l5e/assets-v1/95831f2d-f342-4d89-aa6b-45c9ff61180c/sjm-logo.png"
                alt="SJM Systems Engineering"
                style={{ height: "36px", width: "auto" }}
              />
              <span style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "16px", color: "#FFFFFF", letterSpacing: "-0.01em" }}>
                SJM Systems Engineering
              </span>
            </a>
            <div className="nav-links">
              <a href="/#servizi" style={{ color: "#D8DEEA" }}>Servizi</a>
              <a href="/#come-funziona" style={{ color: "#D8DEEA" }}>Come Funziona</a>
              <a href="/#case-studies" style={{ color: "#D8DEEA" }}>Casi Studio</a>
              <a href="/#about" style={{ color: "#D8DEEA" }}>Chi Siamo</a>
              <a href="/#faq" style={{ color: "#D8DEEA" }}>FAQ</a>
            </div>
            <a
              href="/"
              className="btn btn-secondary"
              style={{
                padding: "8px 18px",
                fontSize: "13px",
                background: "rgba(255,255,255,0.12)",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              ← Torna alla home
            </a>
          </div>
        </nav>

        {/* Hero & Calendly */}
        <main className="container">
          <section className="prenota-hero">
            <div className="prenota-tag">
              <span>●</span> Discovery Call di 30 Minuti
            </div>
            <h1 className="prenota-title">
              Scegli giorno e ora per la tua prima analisi operativa
            </h1>
            <p className="prenota-subtitle">
              Analizziamo insieme i processi della tua azienda per individuare dove l'automazione
              e gli agenti AI generano il ritorno più alto. Nessun impegno, nessun pitch commerciale.
            </p>

            <div className="prenota-pills-row">
              <div className="prenota-pill-item">
                <span>⏱️</span>
                <span>30 minuti via Google Meet</span>
              </div>
              <div className="prenota-pill-item">
                <span>🎯</span>
                <span>Analisi mirata sui tuoi colli di bottiglia</span>
              </div>
              <div className="prenota-pill-item">
                <span>🔒</span>
                <span>Riservatezza garantita (NDA disponibile)</span>
              </div>
            </div>

            {/* Calendly con altezza esplicita 750px inline e via CSS per evitare qualsiasi scroll interno */}
            <div className="calendario-container">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/sebajvr-gpt/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=0f1424&primary_color=3ecfb2"
                style={{ minWidth: "320px", height: "750px", width: "100%" }}
              />
            </div>
          </section>
        </main>

        {/* Footer scuro istituzionale */}
        <footer className="prenota-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} SJM Systems Engineering — Tutti i diritti riservati.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
