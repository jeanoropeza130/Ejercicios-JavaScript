//Uso del Método fill para Llenar un Arreglo con un Valor Específico

//Solution:

let array1 = [1, 2, 3, 4];

console.log(array1.fill(0, 2, 4));
// [ 1, 2, 0, 0, 5 ]

console.log(array1.fill(5, 1));
// [ 1, 5, 5, 5, 5 ]

console.log(array1.fill(6));
// [ 6, 6, 6, 6, 6 ]