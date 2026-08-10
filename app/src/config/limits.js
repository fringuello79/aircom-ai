/**
 * AIRCOM AI — Limiti, crediti e prezzi
 * ------------------------------------------------------------------
 * ⚠️ NESSUN valore economico va scritto altrove nel codice.
 *    Tutti i numeri che riguardano tempo, costi e prezzi stanno QUI.
 *
 * ⚠️ I valori sono PROVVISORI: vanno confermati dopo la prima
 *    misurazione reale del costo di un'ora di sessione.
 */

export const MODEL = {
  // Modello vocale realtime.
  // NOTA: sul modello di punta i costi sono circa 3 volte tanto e il
  // prezzo al pubblico non regge. Cambiare solo con misurazione alla mano.
  // Da riverificare sul listino OpenAI alla data del deploy.
  realtime: "gpt-realtime-mini",

  voice: "verse", // da scegliere in fase di test

  // Rilevazione del turno: MANUALE.
  // Il microfono trasmette solo mentre il PTT è premuto.
  // È insieme la scelta più realistica e la più economica:
  // NON cambiare senza aver capito l'impatto sui costi.
  turnDetection: "manual",
};

export const SESSION = {
  maxMinutes: 30,                // durata massima di una singola sessione
  idleDisconnectSeconds: 90,     // disconnessione se nessuna trasmissione
  heartbeatSeconds: 15,          // ogni quanto il client segnala al server
  tokenTtlSeconds: 60,           // durata della credenziale effimera
  maxConcurrentPerCode: 1,       // un solo utilizzo per volta dello stesso codice
};

export const FREE_TIER = {
  trialMinutesPerDevice: 10,     // prova gratuita, una volta per dispositivo
  clubMemberMinutesMonthly: 120, // soci Aeroclub dei Marsi
};

export const CREDITS = {
  warnAtMinutesRemaining: [5, 1], // avvisi vocali prima dell'esaurimento
  codeValidityMonths: 12,
  codeFormat: "AIRCOM-XXXX-XXXX",
};

export const BUDGET = {
  // Rete di sicurezza durante lo sviluppo, PRIMA che esistano i crediti.
  // Da tenere allineata al limite impostato nel pannello OpenAI.
  dailyEur: 3,
  monthlyEur: 20,
  hardStop: true,                // raggiunto il tetto, il servizio si sospende
  alertAtPercent: 80,
};

export const PRICING = {
  // ⚠️ PROVVISORIO — da confermare dopo la misurazione reale
  currency: "EUR",
  active: false,                 // vendita disattivata finché non è tutto pronto
  packages: [
    { id: "trial",  minutes: 10,  priceEur: 0,     label: "Prova gratuita" },
    { id: "coffee", minutes: 60,  priceEur: 1.50,  label: "Un caffè" },
    { id: "exam",   minutes: 600, priceEur: 12.00, label: "Pacchetto esame" },
  ],
  clubLicenceEurPerYear: { min: 30, max: 60 },
};

export default { MODEL, SESSION, FREE_TIER, CREDITS, BUDGET, PRICING };
