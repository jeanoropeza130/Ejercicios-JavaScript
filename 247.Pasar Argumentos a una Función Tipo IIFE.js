//Pasar Argumentos a una Función Tipo IIFE

//Immediately Invoked Function Expression (IIFE)

let numeros = [1,2,3,4,5];

let resultado = (function(valores){
    return valores.reduce((valorAnterior, valorActual) => {
        return valorAnterior + valorActual;
    })
})(numeros);

console.log(resultado);