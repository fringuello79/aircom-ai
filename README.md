# AIRCOM AI

Simulatore di fraseologia aeronautica con intelligenza artificiale vocale in tempo reale.

Progetto **Aeroclub dei Marsi** — Aviosuperficie LIAH, Celano (AQ).

---

## ⚠️ Disclaimer

> **AIRCOM AI è uno strumento esclusivamente didattico.**
> Non deve essere utilizzato per pianificare o condurre voli reali.
> Frequenze, procedure e informazioni operative devono essere verificate sulle pubblicazioni
> aeronautiche ufficiali aggiornate.

---

## Che cos'è (e cosa non è)

L'Aeroclub dei Marsi mette a disposizione **due strumenti distinti e complementari** per
l'addestramento alla fonia:

| Strumento | Come funziona | Dove vive |
|---|---|---|
| **ATC Trainer** | Istruttore **umano** collegato da remoto che interpreta gli enti radio | repo `aeroclubdeimarsi` |
| **AIRCOM AI** | **Intelligenza artificiale** vocale che interpreta gli enti radio | questa repo |

I due prodotti sono separati e restano separati. **In questa repository non esiste nulla che possa
modificare o rompere l'ATC Trainer.**

---

## La regola d'oro del progetto

> **L'intelligenza artificiale non è una fonte aeronautica.**

L'AI conversa. Il database dice la verità. Il motore di simulazione decide.

Se un dato aeronautico non è presente nel blocco `SCENARIO FACTS` fornito dal sistema, per l'AI
**quel dato non esiste**: non lo deduce, non lo ricorda, non lo inventa. Lo chiede al sistema oppure
dichiara che non è disponibile.

Ogni riga di codice di questo progetto deve rispettare questa regola.

---

## Struttura della repository

```
aircom-ai/
├── app/            → interfaccia utente (browser)
│   └── src/config/ → NOME PRODOTTO, colori, limiti, prezzi  ⭐ unico punto da modificare
├── data/           → STRATO DATI AERONAUTICI (solo dati, mai logica)
│   ├── schema/     → struttura e regole dei campi
│   ├── clubs/      → aeroclub
│   ├── airfields/  → aviosuperfici e aeroporti
│   ├── radio-stations/ → enti radio e frequenze
│   ├── aircraft/   → aeromobili
│   └── scenarios/  → scenari di addestramento
├── functions/api/  → backend (crea i token, controlla i crediti)
├── docs/           → documentazione di progetto
└── tests/          → verifiche automatiche
```

---

## Stato di avanzamento

- [x] **MVP 0 — Fondamenta**: struttura, documentazione, strato dati, configurazioni
- [ ] **MVP 1 — Prima sessione vocale**: PTT, voce realtime, motore di stato, report, crediti
- [ ] **MVP 2**: account, storico, progressi
- [ ] **MVP 3**: multi-aeroclub, dashboard istruttori
- [ ] **MVP 4**: volo libero, database nazionale

---

## Documentazione

| File | Contenuto |
|---|---|
| `docs/ARCHITETTURA.md` | Come è fatto e perché |
| `docs/PROMPT_AI.md` | Istruzioni date all'AI (versionate) |
| `docs/SCENARI.md` | Come si scrive uno scenario |
| `docs/DATI.md` | Regole dello strato dati aeronautici |
| `docs/DEPLOY.md` | Come va online |

---

## Licenza e attribuzione

© 2026 Aeroclub dei Marsi — sviluppo **997Creations**.
Tutti i diritti riservati salvo diversa indicazione.
