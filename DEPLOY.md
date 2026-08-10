# Deploy

## Principio

- **Un solo branch: `main`.** Push su main = build automatica = online.
- **Nessuna build committata.** A differenza di `atc-trainer/`, qui la cartella `dist/` è ignorata
  da git e generata dall'hosting.
- **Nessuna chiave nel repository.** Mai, per nessun motivo.

## Variabili d'ambiente (pannello dell'hosting, mai nei file)

| Nome | Contenuto | Note |
|---|---|---|
| `OPENAI_API_KEY` | chiave OpenAI | **segreta**, cifrata |
| `AIRCOM_ENV` | `dev` o `prod` | |

## Integrazione con il sito Aeroclub

AIRCOM AI vive su un **sottodominio proprio**. Sul sito si aggiungono **due sole righe per pagina**:
una voce di menu e un link nel footer, come già fatto per Quiz VDS.

⚠️ Da fare sul branch effettivamente pubblicato da GitHub Pages
(Settings → Pages → Branch: **da verificare**, la repo del sito ha `main` e `copilot/cellular-optimization`).

Nessun altro file del sito viene toccato. Restano intatti:
`styles.css`, `mobile-menu.js`, `interactions.js`, `meteo-liah.js`, `numeri-random.js`.

## Prima della prima messa online

- [ ] Limite di spesa impostato nel pannello OpenAI
- [ ] Ricarica automatica **disattivata**
- [ ] `PRICING.active = false` finché la vendita non è pronta
- [ ] Disclaimer visibile
- [ ] Prova su iPhone reale (Safari ha regole proprie su microfono e audio)
