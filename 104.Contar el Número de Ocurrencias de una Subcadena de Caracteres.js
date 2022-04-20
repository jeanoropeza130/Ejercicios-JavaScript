//Contar el Número de Ocurrencias de una Subcadena de Caracteres

function contarOcurrencias(cadena, subcadena) {
    let contadorOcurrencias = 0;
    let posicion = 0;

    while ((posicion = cadena.indexOf(subcadena, posicion)) !== -1) {
        ++contadorOcurrencias;

        posicion += subcadena.length;
    }
    return contadorOcurrencias;
}

let cadena = 'JavaScript es una lenguaje de programación. La versión más reciente de JavaScript es ES6 (2015). JavaScript es un lenguaje interpretado que corre en un navegador web.';
console.log(contarOcurrencias(cadena, 'JavaScript'));
console.log(contarOcurrencias(cadena, 'javaScript')); //minuscula no hay 0