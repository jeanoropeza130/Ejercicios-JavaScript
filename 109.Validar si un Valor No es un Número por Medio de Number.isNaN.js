//Validar si un Valor No es un Número por Medio de Number.isNaN

let valor = 'a123abc';

let numero = Number.parseInt(valor);

console.log(typeof valor);
console.log(numero);
console.log(Number.isNaN(numero));

console.log();

let objetoNumber = new Number(valor);

console.log(typeof objetoNumber);
console.log(objetoNumber instanceof Number);
console.log(objetoNumber.isNaN);
console.log(Number.isNaN(objetoNumber));
