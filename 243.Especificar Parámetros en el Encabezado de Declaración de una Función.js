//Especificar Parámetros en el Encabezado de Declaración de una Función

function sumar(a,b){
    console.log(arguments);
    let suma = a+b;

    return suma;
}

function sumarListaValores(valores){
    console.log(arguments);
    return valores.reduce((valorActual, valorSiguiente) => {
        return valorActual + valorSiguiente;
    });
}

console.log(sumar(2,3));

let numeros = [1,2,3,4,5];
console.log(sumarListaValores(numeros));

