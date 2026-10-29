// Impostazioni del sito.
// checkoutEndpoint: indirizzo del "worker" che crea il pagamento Stripe (vedi LEGGIMI.txt, passo 3).
// Finche' e' vuoto il carrello funziona ma il pulsante "Vai al pagamento" mostra un avviso.
window.SITE_CONFIG = {
  checkoutEndpoint: "https://pagamenti.stickerspamsociety.workers.dev"
};
