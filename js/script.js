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

document.getElementById('password').innerHTML = `
  <h1>Password Generator 2021</h1>
  <h4>made by Andrea Fontaneto</h4>

  <p>La tua password generata è:</p>

  <p>${generatePassword}</p>
`;

document.getElementById('passwordlenght').innerHTML = `
  <p>La tua password è lunga:</p>

  <p>${generatePassword.length} caratteri</p>
`;


