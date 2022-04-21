//Agregar y Eliminar Elementos de un Conjunto con add y delete

let numeros = new Set();

numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(3);
numeros.add(4);
numeros.add(5);

console.log(numeros);
console.log(numeros.size);

console.log();

numeros.delete(3);

console.log(numeros);
console.log(numeros.size);

numeros.delete(4);

console.log(numeros);
console.log(numeros.size);