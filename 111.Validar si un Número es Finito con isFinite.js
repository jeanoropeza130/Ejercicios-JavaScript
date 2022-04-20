//Validar si un Número es Finito con isFinite

let numero = 1;

console.log(isFinite(numero));
console.log(Number.isFinite(numero));

console.log();
numero = 1/0;
console.log(numero);
console.log(isFinite(numero));
console.log(Number.isFinite(numero));

console.log();
console.log(isFinite(null));
console.log(isFinite(NaN));
console.log(Number.isFinite(NaN));
console.log(isFinite(undefined));

