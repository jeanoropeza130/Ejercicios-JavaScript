//Especificar Parámetros por Defecto en el Encabezado de una Función


function mostrarMensaje(texto){
    texto = typeof texto !== 'undefined' ? texto : 'valor por defecto1';

    console.log(texto);
}

mostrarMensaje();
mostrarMensaje('¡JavaScript es tremendo!');

console.log();

//ES6

function visualizarMensaje(texto='Valor por defecto2'){
    console.log(texto);
}

visualizarMensaje();
visualizarMensaje('¡JavaScript es tremendo!');
