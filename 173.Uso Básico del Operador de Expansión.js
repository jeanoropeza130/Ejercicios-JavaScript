//Uso Básico del Operador de Expansión

// Solution:

function sumar (a, b, c){
    return a + b + c;
}

let numeros = [1, 2, 3];

let suma = sumar(...numeros);

console.log(suma);

let primos = [2, 3, 5];
let resultado = [...numeros, ...primos]
console.log(resultado);