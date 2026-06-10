## Obiettivo

Nella sezione "About / Founder" la sfera `tech-orb.png` (in alto sopra la card "SJM · Dashboard operativa") è un'immagine quadrata fluttuante che stona con il resto della pagina, dove l'elemento dominante sono i video verticali (demo, process). Va sostituita con un mockup **verticale** che riprenda lo stesso linguaggio visivo dei video.

## Proposta

Sostituire `<img src="/tech/tech-orb.png">` con un **mockup smartphone verticale (9:16)** che mostra un agente AI in azione — coerente per proporzioni, ritmo e palette con `demo-video` e `process-video`.

### Cosa contiene il mockup

Un device frame (cornice telefono arrotondata, notch sottile, ombra morbida) che incornicia una conversazione/log agente animata in loop puro CSS:

```text
┌─────────────────┐
│   • • •  9:41   │  ← status bar
├─────────────────┤
│  Agente SJM     │
│  ● online       │
│                 │
│  ┌───────────┐  │
│  │ Nuova     │  │  ← bubble in entrata (utente)
│  │ richiesta │  │
│  └───────────┘  │
│                 │
│      ┌────────┐ │
│      │ Letto, │ │  ← bubble agente (typing → testo)
│      │ smisto │ │
│      │ a HR ✓ │ │
│      └────────┘ │
│                 │
│  ━━━━━━━━━━━━   │  ← progress bar pratiche
│  12 / 47 oggi   │
└─────────────────┘
```

Animazione: bubble che scorrono dall'alto verso l'alto in loop lento (~12s), indicatore "typing" a 3 puntini, progress bar che si riempie. Tutto **CSS keyframes** — nessun video reale, nessun JS aggiuntivo.

### Layout e posizionamento

- Stesso slot attuale (sopra `about-card`), ma il mockup diventa l'elemento di apertura visiva della colonna destra.
- Aspect-ratio fisso 9:19.5 (proporzioni telefono moderno), larghezza max ~240px desktop, ~200px mobile, allineato a destra come gli altri tech-float.
- Cornice: bordo `1px solid rgba(126,244,229,0.18)`, `border-radius: 32px`, ombra morbida `0 30px 60px -20px rgba(15,20,36,0.45)`, sfondo gradient `#0F1424 → #1a2340` per richiamare i video scuri.
- Accent color `#7EF4E5` per gli stati attivi (puntino online, progress bar, check) — stesso verde-acqua già usato in hero highlight.
- Sotto al mockup resta invariata la `about-card` con le metriche.

### Responsive

- Desktop: mockup affianca la card a destra, larghezza 240px.
- Mobile (<768px): mockup centrato sopra la card, larghezza 200px, margine verticale 24px.

### Dettagli tecnici

File toccati:
- `src/assets/sjm-body.html` — sostituire la riga 316 con il markup del mockup (`<div class="phone-mockup">…</div>` con status bar, header agente, 3 bubble, progress bar).
- `src/assets/sjm.css` — aggiungere il blocco `.phone-mockup` + keyframes (`@keyframes bubble-rise`, `@keyframes typing-dot`, `@keyframes progress-fill`). Rimuovere/sovrascrivere `.tf-about` non più necessario.
- Nessun nuovo asset binario, nessuna dipendenza aggiuntiva.

### Cosa NON cambia

- Testo founder, credenziali, lista bullet, dashboard card metriche.
- Sezioni hero, demo, process, footer.
- Palette globale, font, header.

## Verifica finale

Dopo l'implementazione: screenshot desktop (1366) e mobile (390) della sezione About per confermare allineamento, leggibilità e coerenza con i video verticali sopra.