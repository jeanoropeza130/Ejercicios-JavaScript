//Obtener el Nombre de un Symbol a partir de una Referencia

let symbol1 = Symbol.for('Symbol1');

console.log(symbol1);
console.log(Symbol.keyFor(symbol1));