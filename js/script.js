// creare un generatore di password 

/*

chiedendo all'utente:

1- nome
2- cognome
3- colore preferito
4- stampare la password generata

es. nomecognomecolorepreferito21

*bonus*
5- stampare la lunghezza della password 

*/

const firstname = prompt('il tuo nome?');
const lastname = prompt('il tuo cognome?');
const favcolour = prompt('colore preferito?');

console.log(firstname);
console.log(lastname);
console.log(favcolour);

const generatePassword = firstname + lastname + favcolour + 21

console.log(generatePassword);


