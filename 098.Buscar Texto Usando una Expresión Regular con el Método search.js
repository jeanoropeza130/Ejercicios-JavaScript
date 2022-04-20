//Buscar Texto Usando una Expresión Regular con el Método search

let cadena = 'JavaScript es un lenguaje de programaciòn'
let cadena1 = 'JavaScript es un lenguaje de programacion'

console.log(cadena.search('J'));
console.log(cadena.search('ò'));
console.log(cadena1.search(/\w+$/));
console.log(cadena1.indexOf('progrmacion'));

console.log();

cadena = 'ECMASCript6';
console.log(cadena.search(/[^a-z]/i));
console.log(cadena.indexOf('6'));

console.log();

cadena = 'ECMASCript';
console.log(cadena.search(/[^a-z]/i));
console.log(cadena.indexOf('6'));