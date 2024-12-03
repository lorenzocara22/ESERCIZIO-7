/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = 7 ;
let numero2 = 4 ;

let magg;

if (numero1 > numero2) {
  magg = numero1;
}

else{
  magg = numero2

}

console.log(  "il numero maggiore è :" , magg );

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const numero = 9 ;

if ( numero != 5 ) {

  console.log ("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
const num = 10;  
if (num / 5 === Math.floor(num / 5)) {  
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const num1 = 5;  
const num2 = 3;

if (num1 === 8) {
  console.log("Una delle condizioni è vera");
} else if (num2 === 8) {
  console.log("Una delle condizioni è vera");
} else if (num1 + num2 === 8) {
  console.log("Una delle condizioni è vera");
} else if (num1 - num2 === 8) {
  console.log("Una delle condizioni è vera");
} else if (num2 - num1 === 8) {
  console.log("Una delle condizioni è vera");
} else {
  console.log("Nessuna condizione è vera");
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 55;  
let shippingCost = 10;  

if (totalShoppingCart > 50) {  
  shippingCost = 0;
}

const totalAmount = totalShoppingCart + shippingCost;  

console.log("L'importo totale da addebitare è:", totalAmount);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const totaleCarrello = 100;  
let costoSpedizione = 10;  
const scontoBlackFriday = 0.20;  

const importoSconto = totaleCarrello * scontoBlackFriday;  
const totaleScontato = totaleCarrello - importoSconto;  

if (totaleScontato > 50) {
  costoSpedizione = 0;  
}

const importoTotale = totaleScontato + costoSpedizione;

console.log("L'importo totale da addebitare è:", importoTotale);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const valori = [17, 23, 45]; 

valori.sort(function(a, b) {
  return b - a;  
});

console.log("I numeri ordinati dal più alto al più basso sono:", valori[0], valori[1], valori[2]);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const valore = 25; 

if (typeof valore === 'number') {
  console.log("Il valore è un numero.");
} else {
  console.log("Il valore non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


const valore1 = 25;  // Puoi cambiare questi valori per testare altre combinazioni
const valore2 = 10;
const valore3 = 30;

// Ordinare i numeri dal più alto al più basso
let maggiore, medio, minore;  // Dichiariamo le variabili per i numeri ordinati

if (valore1 >= valore2 && valore1 >= valore3) {
  maggiore = valore1;
  if (valore2 >= valore3) {
    medio = valore2;
    minore = valore3;
  } else {
    medio = valore3;
    minore = valore2;
  }
} else if (valore2 >= valore1 && valore2 >= valore3) {
  maggiore = valore2;
  if (valore1 >= valore3) {
    medio = valore1;
    minore = valore3;
  } else {
    medio = valore3;
    minore = valore1;
  }
} else {
  maggiore = valore3;
  if (valore1 >= valore2) {
    medio = valore1;
    minore = valore2;
  } else {
    medio = valore2;
    minore = valore1;
  }
}
console.log("I numeri ordinati dal più alto al più basso sono:", maggiore, medio, minore);
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
};

me.city = 'Toronto';

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
