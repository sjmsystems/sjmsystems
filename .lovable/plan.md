## Obiettivo

Su desktop, accanto al telefono nella sezione About c'è molto spazio bianco. Lo riempiamo con **log card fluttuanti** che "orbitano" attorno al telefono raccontando cosa sta facendo l'agente in background.

## Soluzione

Aggiungere 4 piccole card (glass / dark) posizionate absolute attorno al `.phone-mockup`, dentro un wrapper `.phone-stage` che diventa l'area visiva della colonna destra. Ogni card ha un'icona, una label e un timestamp/stato. Animazione fluttuante leggera (float Y di pochi px) sfalsata.

### Card proposte

```text
            ┌───────────────────┐
            │ ✉  Email smistata │       ← top-left, alta
            │    HR · 2s fa     │
            └───────────────────┘
                       ┌──────────┐
                       │ [PHONE]  │     ← centro
                       │          │
   ┌──────────────────┐│          │
   │ ⚡ Ticket creato ││          │┌──────────────────┐
   │   CRM · 14s fa   ││          ││ ✓ Report inviato │
   └──────────────────┘│          ││   Sales · 31s fa │
                       └──────────┘└──────────────────┘
                ┌──────────────────────┐
                │ ⏱ -42 min/giorno     │  ← bottom, accent
                │   Operations         │
                └──────────────────────┘
```

4 card totali:
1. **Email smistata** → HR · ora
2. **Ticket creato** → CRM · 14s fa
3. **Report inviato** → Sales · 31s fa
4. **-42 min/giorno** (KPI accent verde-acqua) → Operations

### Layout

- `.phone-stage` diventa contenitore `position: relative`, min-height pari all'altezza del telefono + margini.
- `.phone-mockup` centrato dentro lo stage.
- 4 `.float-card` con `position: absolute` su angoli/lati, z-index sopra/sotto il telefono per profondità.
- Tutte con `backdrop-filter: blur(12px)`, sfondo `rgba(15,20,36,0.72)`, bordo `1px solid rgba(126,244,229,0.18)`, ombra morbida.
- La card KPI usa background `linear-gradient(135deg, rgba(126,244,229,0.18), rgba(126,244,229,0.04))` per spiccare.
- Micro-animazione `@keyframes float-card` (translateY ±4px, 6s ease-in-out, delay sfalsato per card).
- Sotto: la `.about-card` dashboard resta com'è, full-width della colonna.

### Responsive

- **Desktop (≥1024px)**: card sparse in absolute attorno al telefono come da schema.
- **Tablet (768-1023px)**: solo 2 card visibili (top-left + bottom-right), le altre `display: none`.
- **Mobile (<768px)**: tutte le `.float-card` nascoste, resta il telefono centrato come ora.

### File toccati

- `src/assets/sjm-body.html` — wrap del `.phone-mockup` in un `.phone-stage` + 4 `<div class="float-card …">` siblings.
- `src/assets/sjm.css` — aggiungere `.phone-stage`, `.float-card` (varianti `.fc-tl`, `.fc-cl`, `.fc-br`, `.fc-bl-kpi`), keyframes `float-card`, breakpoint responsive.

Nessun nuovo asset, nessun JS.

## Verifica

Screenshot desktop 1366 e mobile 390 della sezione About per confermare bilanciamento e che le card non sovrappongano testo.