# Architettura

## I tre strati

```
A. STRATO DATI AERONAUTICI  (data/)         → la verità
B. MOTORE DI SIMULAZIONE    (app/src/engine/) → le decisioni
C. STRATO CONVERSAZIONALE   (AI)            → la voce
```

L'AI conversa. Il database dice la verità. Il motore decide.
Nessuno dei tre fa il lavoro dell'altro.

## Flusso di una sessione

```
Setup (gratis, tutto nel browser)
   ↓
POST /api/session
   ├─ verifica crediti/quota   → se zero: NESSUN token creato, costo zero
   ├─ carica scenario + dati VERIFIED
   ├─ compone prompt + SCENARIO FACTS
   ├─ POST /v1/realtime/client_secrets  ← la chiave vera vive SOLO qui
   └─ restituisce credenziale effimera (validità ~1 minuto)
   ↓
Browser ↔ OpenAI in WebRTC (audio diretto, non passa dal nostro server)
   ↓
PTT premuto  → microfono attivo → stato TRANSMITTING
PTT rilasciato → microfono spento → turno chiuso → l'ente risponde
   → trascrizione → il motore valuta → aggiorna lo stato
   → nuovi SCENARIO FACTS solo se lo stato è cambiato
   ↓
Fine → POST /api/usage → report
```

## Perché il PTT con turno manuale

Con la rilevazione automatica della voce il microfono trasmette in continuazione: silenzi, rumore e
conversazioni fuori campo vengono inviati e fatturati. Con il PTT si trasmette solo mentre si preme.

È l'unico punto del progetto in cui **realismo aeronautico e risparmio coincidono perfettamente.**

## Backend: quattro funzioni, nessun server

| Endpoint | Funzione |
|---|---|
| `POST /api/session` | verifica crediti, crea la credenziale effimera |
| `POST /api/heartbeat` | scala i minuti durante la sessione |
| `POST /api/usage` | registra il consumo a fine sessione |
| `GET /api/config` | limiti e stato budget per l'interfaccia |

## Multi-aeroclub

Predisposto, non attivo. Concretamente: ogni dato ha `club_id`, esiste `data/clubs/`, e tutto il
branding sta in `app/src/config/brand.js`. Aggiungere un club domani = aggiungere file.

## Rapporto con ATC Trainer

**Nessuna dipendenza tecnica.** Solo link reciproci e una pagina che spiega la differenza tra
istruttore umano e AI, perché è la confusione più probabile fra i soci.
