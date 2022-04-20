//Uso del Operador delete para Eliminar un Elemento de un Arreglo

//Solucion:

let numeros = [1, 2, 3, 4, 5];

console.log(numeros.length);
console.log(numeros);

console.log();

delete numeros[3];
console.log(numeros.length);
console.log(numeros);

console.log();

console.log(numeros[3] == undefined);

console.log();

numeros = numeros.filter((valor) => {
    return valor != undefined;
});

console.log(numeros.length);
console.log(numeros);