//Encontrar el Valor Mínimo y Máximo de un Arreglo con la Clase Math

// Solution:

let numeros = [3, 2, 7, 5, -1, 0, 11, 13, 6, 19, 1];

console.log(Math.min.apply(null, numeros));
console.log(Math.max.apply(null, numeros));