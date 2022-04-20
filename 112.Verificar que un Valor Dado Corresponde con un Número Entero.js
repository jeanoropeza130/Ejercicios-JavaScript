// Verificar que un Valor Dado Corresponde con un Número Entero

let valor = 1;
console.log(Number.isInteger(valor));

console.log();

valor = '1';
console.log(Number.isInteger(valor));

console.log();

valor = NaN;
console.log(Number.isInteger(valor));

valor = undefined;
console.log(Number.isInteger(valor));

console.log();
valor = 1.4142;
console.log(Number.isInteger(valor));

console.log();
valor = '35';
console.log(Number.isInteger(valor));