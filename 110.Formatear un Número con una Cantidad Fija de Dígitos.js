//Formatear un Número con una Cantidad Fija de Dígitos

var numero = 1.23456789;

console.log(numero.toPrecision());
console.log(numero.toPrecision(2));
console.log(numero.toPrecision(5));

console.log();

console.log(numero.toFixed());
console.log(numero.toFixed(2));
console.log(numero.toFixed(5));