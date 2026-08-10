# Come si scrive uno scenario

Uno scenario è **un file JSON**, non del codice. Vive in `data/scenarios/`.

## Regole

1. **Mai scrivere uno scenario come funzione JavaScript.** Se serve logica nuova, va nel motore,
   non nello scenario.
2. **Uno scenario non può dichiarare dati reali** se gli aviosuperfici/enti che usa non sono
   `VERIFIED`. In quel caso gira come `SIMULATED` e l'interfaccia lo dichiara.
3. **`reviewed_by_instructor: true` è obbligatorio prima della pubblicazione.**
4. **`expected_calls` non è opzionale.** Sono le chiamate corrette come le insegna la scuola:
   servono sia all'AI sia alla valutazione. Senza, lo scenario non è pubblicabile.

## Randomizzazione

Il blocco `randomize` fa variare pista, vento, traffico ed eventi ad ogni esecuzione.
Serve a impedire che l'allievo impari la sequenza a memoria invece della fraseologia.
È poco codice e molto valore didattico.

## Scenari previsti per l'MVP 1

| File | Contenuto | Stato |
|---|---|---|
| `liah-local-01.json` | circuito locale, un solo ente | bozza creata |
| `liah-external-01.json` | contatto con ente esterno | in attesa dati |
| `exam-fonia-01.json` | simulazione esame, modalità EXAM | in attesa dati |
