//Buscar Texto en una Cadena de Caracteres con una Expresión Regular

let frase = 'JavaScript es un lenguaje de programacion interpretado';

let patron = /lenguaje/i;

console.log(frase.search(patron));

console.log();

patron = /javascript/i;
console.log(frase.search(patron));

console.log()

patron = /Lenguaje/i;
console.log(frase.search(patron));