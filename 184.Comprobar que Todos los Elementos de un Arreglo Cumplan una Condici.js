// Comprobar que Todos los Elementos de un Arreglo Cumplan una Condición

//Solution:

let numeros = [3, 7, 2, 1, 9, 11, 13];

let resultado = numeros.every((valor) => {
    return valor > 2;
});

console.log(resultado);

console.log();

resultado = numeros.every((valor) => {
    return valor > 0;
});

console.log(resultado);