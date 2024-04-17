// Tariffa per KM
const priceKm = 0.21;

// Distanza in km che percorre da chiedere all'utente ed età
const distanceKm = prompt("Inserisci la distanza che vuoi percorrere");
const age = prompt("Inserisci età");

// Prezzo del biglietto senza sconto
let priceTicket = priceKm * distanceKm;
priceFixed = priceTicket.toFixed(2);
console.log(`Il prezzo del biglietto sarà: ${priceFixed}`)

// Stringa
string = "Il prezzo normale è:"
stringJunior = "Il prezzo scontato per i minorenni è:"
stringSenior = "Il prezzo scontato per i senior è:"

// Sconti

if (age<=17) {
    priceTicketJunior = ((priceKm * distanceKm) - (priceTicket * 20 / 100));
    priceTicketJuniorFixed = priceTicketJunior.toFixed(2)
    console.log(`Il prezzo del biglietto per i minorenni sarà: ${priceTicketJuniorFixed}`);
    document.getElementById("price-junior").innerHTML = stringJunior + priceTicketJuniorFixed;
}



if (age>=65) {
    priceTicketSenior = ((priceKm * distanceKm) - (priceTicket * 40 / 100));
    priceTicketSeniorFixed = priceTicketSenior.toFixed()
    console.log(`Il prezzo del biglietto per i senior sarà: ${priceTicketSeniorFixed}`);
    document.getElementById("price-senior").innerHTML = stringSenior + priceTicketSeniorFixed;
}

document.getElementById("price").innerHTML = string + priceFixed;
