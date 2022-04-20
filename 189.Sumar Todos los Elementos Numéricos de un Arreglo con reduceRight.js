// Sumar Todos los Elementos Numéricos de un Arreglo con reduceRight

// Solution:

let numeros = [1, 2, 3, 4, 5];

let suma = numeros.reduceRight((anterior, actual) => {
   return anterior + actual;
});

console.log(numeros);
console.log(suma);