//Reducir la Aridad (i.e., Número de Argumentos) de una Función

//Aridad = numeros de argumentos

function crearCadena(delimitadorIzquierda, cadena, delimitadorDerecha){
    return `${delimitadorIzquierda}${cadena}${delimitadorDerecha}`;
}

function comillasSimples(cadena){
    return crearCadena("'", cadena, "'");
}

function textoGuiones(cadena){
    return crearCadena("-", cadena, "-");
}

function crearEntidadNombrada(codigo){
    return crearCadena("&#", codigo, ";");
}

console.log(crearCadena('<', 'Hola', '>'));
console.log(crearCadena('[', 'Hola', ']'));
console.log(crearCadena('&#', '169', ';'));

console.log();

console.log(comillasSimples('Hola'));
console.log(textoGuiones('Hola'));
console.log(crearEntidadNombrada('169'));