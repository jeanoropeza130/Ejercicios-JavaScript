//Buscar Números Reales en un Texto con una Expresión Regular

let texto = 'El primer producto cuesta $29.95. El segundo producto cuesta $35.7. El total es $65.65.';

let patron = /\d+\.\d+/g;

let numeros = texto.match(patron).map(Number);

console.log(numeros);
console.log(typeof numeros[0]);