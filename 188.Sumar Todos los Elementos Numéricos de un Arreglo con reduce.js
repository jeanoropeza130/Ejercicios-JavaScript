// Sumar Todos los Elementos Numéricos de un Arreglo con reduce

// Solution:

let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduce((anterior, actual) => {
   return anterior + actual;
});

console.log(numeros);
console.log(suma);