//Eliminar Elementos de un Arreglo con la Librería Lodash

//Solucion:

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numeros);

let pares = _.remove(numeros, (n) => {
    return n % 2 == 0;
});

console.log();
console.log(numeros);
console.log(pares);

