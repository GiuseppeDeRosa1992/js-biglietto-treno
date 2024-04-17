// Tariffa per KM
const priceKm = 0.21;

// Distanza in km che percorre da chiedere all'utente ed età
const distanceKm = prompt("Inserisci la distanza che vuoi percorrere");
const age = prompt("Inserisci età");

// Prezzo del biglietto senza sconto
let priceTicket = priceKm * distanceKm;
console.log(`Il prezzo del biglietto sarà: ${priceTicket}`)

// Sconti

if (age<=17) {
    priceTicketJunior = ((priceKm * distanceKm) - (priceTicket * 20 / 100));
    console.log(`Il prezzo del biglietto per i minorenni sarà: ${priceTicketJunior}`);
}



if (age>=65) {
    priceTicketSenior = ((priceKm * distanceKm) - (priceTicket * 40 / 100));
    console.log(`Il prezzo del biglietto per i senior sarà: ${priceTicketSenior}`);
}

