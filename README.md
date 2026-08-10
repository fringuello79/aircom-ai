# Regole dello strato dati

Questa cartella contiene **solo dati**. Mai logica, mai codice.

## Il blocco `_meta` è obbligatorio

Ogni file di dato aeronautico deve contenere un blocco `_meta`:

```json
"_meta": {
  "status": "PENDING_VERIFICATION",
  "data_type": "REAL_UNVERIFIED",
  "source": "chi lo pubblica",
  "source_reference": "riferimento preciso (es. carta, documento)",
  "source_date": "quando è stato pubblicato",
  "verified_by": "chi lo ha firmato come corretto",
  "verified_at": "quando",
  "valid_from": null,
  "valid_to": null,
  "notes": null
}
```

## Valori di `status`

| Stato | Significato | Utilizzabile? |
|---|---|---|
| `DRAFT` | bozza, incompleto | no |
| `PENDING_VERIFICATION` | compilato, non ancora firmato | solo scenari dichiarati SIMULATED |
| `VERIFIED` | verificato da persona responsabile | **sì**, anche in scenari con dati reali |
| `OUTDATED` | scaduto (`valid_to` superato) | no |
| `DISABLED` | disattivato manualmente | no |

## Valori di `data_type`

| Tipo | Significato |
|---|---|
| `REAL_VERIFIED` | dato reale, verificato |
| `REAL_UNVERIFIED` | dato reale dichiarato ma non ancora verificato |
| `SIMULATED` | dato di fantasia, dichiarato tale anche in interfaccia |

## Le due regole che non si violano

1. **Solo `VERIFIED` alimenta scenari che dichiarano dati reali.**
2. **Un campo `null` resta `null`.** Non si riempie con una stima, con un ricordo o con un valore
   "che sembra giusto". Un campo vuoto è un'informazione: dice al motore di non usarlo.

## Campi `_todo`

I campi che iniziano con `_todo` indicano cosa manca e chi lo deve fornire.
Vanno rimossi quando il dato è stato compilato e verificato.
