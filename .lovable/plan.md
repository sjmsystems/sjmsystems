Correggerei il problema del chatbot intervenendo solo sul codice che lo carica e sul CSS aggiunto per ridimensionarlo.

Piano:
1. Rimuovere il doppio caricamento dello script Relevance AI: ora è sia nell'head sia aggiunto via `useEffect`, e questo può bloccare o rendere instabile l'apertura del widget.
2. Lasciare un solo caricamento affidabile del widget nella root dell'app, dopo il mount del client.
3. Sostituire la regola mobile `transform: scale(...)`, perché può ridurre anche l'area cliccabile o spostare l'iframe, con una riduzione più sicura basata su dimensioni/posizionamento del launcher.
4. Verificare che il widget resti sopra la pagina (`z-index`) e sia cliccabile sia desktop sia mobile.

File coinvolti:
- `src/routes/__root.tsx`
- `src/assets/sjm.css`