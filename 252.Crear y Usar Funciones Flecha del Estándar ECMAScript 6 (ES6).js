//Crear y Usar Funciones Flecha del Estándar ECMAScript 6 (ES6)

// =>

let sumar = function(a, b){
    return a + b;
};

console.log(sumar(2, 3));

let sumarNumeros = (a, b) => {
    return a + b;
}

console.log(sumarNumeros(2, 3));


setTimeout(() => {
    console.log('Funciones flecha...');

}, 5000);

console.log();


let numeros = [2, 3, 5, 7, 11];

let resultado = numeros.reduce((valorAnterior, valorActual) => { return valorAnterior + valorActual})

console.log(resultado);



