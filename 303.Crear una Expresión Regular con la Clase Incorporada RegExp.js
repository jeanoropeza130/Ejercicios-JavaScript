//Crear una Expresión Regular con la Clase Incorporada RegExp

let patron = /\d+/i;

let numerosRegex = new RegExp(patron);

let cadena = '123';

console.log(numerosRegex.test(cadena));

console.log();

cadena = 'abc';

console.log(numerosRegex.test(cadena));
