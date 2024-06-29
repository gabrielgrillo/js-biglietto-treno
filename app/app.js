// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Stampate il prezzo del biglietto in console, ma l’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo e questo richiederà un minimo di ricerca.).
// BONUS:
// Stampate il risultato anche nella pagina in un apposito elemento <p> del mio codice HTML.


console.log("ciao")

//chiedere numero di km da percorrere
const kmViaggio = prompt("Inserisci i km da percorrere ")

//chiedere età del passeggero
const anniPasseggero = prompt("Inserisci la tua età ")

//prezzo totale viaggio prezzo al km 0.21€
let prezzoViaggio = kmViaggio * 0.21
//prezzi scontati
let scontato20 = prezzoViaggio * 0.8
let scontato40 = prezzoViaggio * 0.6

//SE minorenne 
// sconto 20%
if (anniPasseggero < 18) {
    console.log(' il prezzo del biglietto è € ' + scontato20.toFixed(2))
}
//ALTRIMENTI SE over 65
//sconto 40%
else if (anniPasseggero > 65) {
    console.log(' il prezzo del biglietto è € ' + scontato40.toFixed(2))
}

else
    console.log(' il prezzo del biglietto è € ' + prezzoViaggio.toFixed(2))
//stampa prezzo finale con due decimali