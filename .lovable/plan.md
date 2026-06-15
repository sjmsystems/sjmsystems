## Modifiche

### 1. `src/assets/sjm-body.html` — sezione `#case-studies`
Aggiungere una quarta `<div class="cs-card reveal">` subito dopo la terza card, stessa identica struttura (`.cs-sector`, `.cs-problem`, `.cs-result`, `.cs-quote`):

- Sector: "Studi Legali / Professionisti con clientela internazionale"
- Problema: testo fornito
- `.cs-result`: testo "Soluzione" (avatar digitale, scenari multipli, cinese madrelingua)
- `.cs-quote`: «"Solo il video in cinese vale già quello che ho pagato." — Avvocato, Milano. Il cliente ha dichiarato che promuoverà attivamente il servizio.»

### 2. `src/assets/sjm-body.html` — Dashboard operativa (righe 370-395)
- Progetti consegnati: **3 → 4**
- Settori coperti: aggiungere "· Legale" in coda

### 3. `src/assets/sjm.css` — griglia `.cs-grid` (riga 509)
Cambiare `grid-template-columns: repeat(3, 1fr)` → `repeat(4, 1fr)`.

Il breakpoint esistente `@media (max-width: 1024px) { .cs-grid { grid-template-columns: 1fr; … } }` (riga 900) già forza una sola colonna su tablet e mobile: la quarta card finisce automaticamente in coda alla terza, come richiesto. Nessuna ulteriore media query necessaria.

Risultato:
- Desktop (>1024px): 4 card sulla stessa riga
- Tablet/Mobile (≤1024px): card impilate 1 per riga, la nuova in coda