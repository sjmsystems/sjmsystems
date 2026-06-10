## Obiettivo
Sostituire l'attuale social image (orizzontale, viene tagliata in anteprime quadrate) con una nuova immagine che caricherai tu in chat.

## Passi
1. Tu carichi la nuova immagine in chat (consigliato: 1200x1200 px quadrata, così è leggibile sia nelle anteprime square di WhatsApp/Telegram sia in quelle orizzontali di LinkedIn/Facebook/Twitter, che la centrano senza tagliare contenuti chiave).
2. Carico il file su CDN tramite `lovable-assets` e salvo il pointer in `src/assets/social-card.<ext>.asset.json`.
3. Aggiorno in `src/routes/__root.tsx` i meta `og:image` e `twitter:image` con il nuovo URL CDN.
4. Aggiungo i meta `og:image:width`, `og:image:height` e `og:image:alt` per dare a crawler/anteprime le dimensioni esatte (evita crop indesiderati quando possibile).
5. Verifico che la rotta `/` non sovrascriva `og:image` (attualmente non lo fa, ok).

## Note
- L'URL OG attuale punta a un file `social-1781036846962-...webp` su `storage.googleapis.com`. Lo sostituisco completamente.
- Le piattaforme cachano le anteprime: dopo il deploy potresti dover forzare il refresh (LinkedIn Post Inspector, Facebook Sharing Debugger, X Card Validator).
- Se preferisci mantenere un'immagine orizzontale "pulita" (1200x630) e accettare che WhatsApp la mostri square con crop centrale, dimmelo e adatto le dimensioni dei meta.

Quando carichi l'immagine procedo con l'implementazione.