//Eliminar el Primer Elemento de un Arreglo con shift

// Solucion:

let numeros = [1, 2, 3, 4, 5];

console.log(numeros.length);
console.log(numeros);

console.log();

let numeroEliminado = numeros.shift();
console.log(numeros.length);
console.log('Numero eliminado: ', numeroEliminado);
console.log(numeros);