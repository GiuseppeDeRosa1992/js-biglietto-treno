// Tariffa per KM
const priceKm = 0.21;

// Distanza in km che percorre da chiedere all'utente ed età
const distanceKm = prompt("Inserisci la distanza che vuoi percorrere");
const age = prompt("Inserisci età");

// Prezzo del biglietto senza sconto
let priceTicket = priceKm * distanceKm;
priceFixed = priceTicket.toFixed(2);
console.log(`Il prezzo base del biglietto è: ${priceFixed}`)

// Stringa
string = "Il prezzo normale è:"
stringJunior = "Il prezzo scontato per i minorenni è:"
stringSenior = "Il prezzo scontato per i senior è:"

// Sconti

if (age<=17) {
    priceTicketJunior = ((priceTicket) - (priceTicket * 0.2));
    priceTicketJuniorFixed = priceTicketJunior.toFixed(2)
    console.log(`Il prezzo del biglietto scontato per i minorenni sarà: ${priceTicketJuniorFixed}`);
    document.getElementById("price-junior").innerHTML = stringJunior + priceTicketJuniorFixed;
}



else if (age>=66) {
    priceTicketSenior = ((priceTicket) - (priceTicket * 0.4));
    priceTicketSeniorFixed = priceTicketSenior.toFixed()
    console.log(`Il prezzo del biglietto scontato per i senior sarà: ${priceTicketSeniorFixed}`);
    document.getElementById("price-senior").innerHTML = stringSenior + priceTicketSeniorFixed;
}

document.getElementById("price").innerHTML = string + priceFixed;
