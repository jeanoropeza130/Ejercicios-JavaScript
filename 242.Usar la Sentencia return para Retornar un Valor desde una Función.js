//Usar la Sentencia return para Retornar un Valor desde una Función

function sumar (a,b){
    return a + b;
}

function mostrarMensaje(mensaje){
    console.log(mensaje);
}

function crearConjunto(lista){
    let conjunto = new Set(lista);

    return conjunto;
}

console.log(sumar(2,3));

console.log();

let resultado = mostrarMensaje("Hola Mundo");
console.log(resultado);

console.log();

resultado = crearConjunto([1,1,2,3,3,4,5,6,7,8,9,10,10]);
console.log(resultado)