## Problema
Nella strip "Già operativo in" (sotto la hero) compaiono i nomi espliciti **Gamalife** e **Virgin Active**, in contrasto con la policy applicata nei Casi Studio dove i clienti sono anonimizzati per settore.

## Modifica
In `src/assets/sjm-body.html` (righe 85–96), sostituire i nomi con etichette di settore coerenti con i casi studio già pubblicati:

- `Gamalife` → `Assicurativo / Previdenziale`
- `Virgin Active` → `Fitness / Centri sportivi`

Risultato finale della strip:

```
Già operativo in:  Assicurativo / Previdenziale  ·  Fitness / Centri sportivi
```

Nessun'altra modifica al CSS o alla struttura: gli stili `.credibility-client` restano invariati.

## Verifica
Dopo l'edit ricontrollare con un grep su `gamalife|virgin` nell'intero repo per assicurarsi che non rimangano altre menzioni.