/**
 * AIRCOM AI — Configurazione di marca
 * ------------------------------------------------------------------
 * ⭐ QUESTO È L'UNICO FILE IN CUI COMPARE IL NOME DEL PRODOTTO.
 *
 * Il nome "AIRCOM AI" è provvisorio. Per cambiarlo in futuro basta
 * modificare le righe qui sotto: non va toccato nient'altro.
 *
 * © 2026 Aeroclub dei Marsi — sviluppo 997Creations
 */

export const BRAND = {
  // --- Identità -----------------------------------------------------
  productName: "AIRCOM AI",
  productShort: "AIRCOM",
  version: "0.1.0",

  tagline: {
    it: "Addestramento alla fonia aeronautica con AI vocale",
    en: "Aviation radio phraseology training with AI voice",
  },

  // --- Proprietà ----------------------------------------------------
  owner: {
    clubId: "aeroclub-dei-marsi",
    clubName: "Aeroclub dei Marsi",
    website: "https://www.aeroclubdeimarsi.it",
    contact: "997creations@gmail.com",
  },

  developer: { name: "997Creations", year: 2026 },

  // --- Palette (coerente con il sito e con l'app prenotazioni) -------
  colors: {
    navy: "#0f172a",
    gold: "#c9a960",
    burgundy: "#7a1f2b",
    txActive: "#e0a800",   // ambra: stiamo trasmettendo
    rxActive: "#2e9e5b",   // verde: stiamo ricevendo
    standby:  "#5a6473",   // grigio: in attesa
    fault:    "#b03030",   // rosso: connessione persa
  },

  fonts: { display: "Outfit", body: "Inter" },

  // --- Disclaimer ---------------------------------------------------
  // Deve restare visibile in modo permanente durante l'uso.
  disclaimer: {
    it:
      "AIRCOM AI è uno strumento esclusivamente didattico. Non deve essere utilizzato " +
      "per pianificare o condurre voli reali. Frequenze, procedure e informazioni " +
      "operative devono essere verificate sulle pubblicazioni aeronautiche ufficiali aggiornate.",
    en:
      "AIRCOM AI is a training tool only. It must not be used to plan or conduct real " +
      "flights. Frequencies, procedures and operational information must be verified " +
      "against current official aeronautical publications.",
  },

  // --- ATC Trainer: prodotto complementare, NON sostituito -----------
  siblingProduct: {
    name: "ATC Trainer",
    url: "https://www.aeroclubdeimarsi.it/atc-trainer/",
    description: {
      it: "Esercitazioni radio con istruttore umano collegato da remoto.",
      en: "Radio training with a live human instructor.",
    },
  },
};

export default BRAND;
