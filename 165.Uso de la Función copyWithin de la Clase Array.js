//Uso de la Función copyWithin de la Clase Array

//Solution:

let array1 = ['a', 'b', 'c', 'd', 'e'];

console.log(array1.copyWithin(0, 3, 4));
//[ 'd', 'b', 'c', 'd', 'e' ]

console.log(array1.copyWithin(1, 3));
//[ 'd', 'd', 'e', 'd', 'e' ]

/////////////////////////////////////////////////////////////////////////////////////
console.log();

let numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros);

numeros.copyWithin(3, 0);
console.log(numeros);