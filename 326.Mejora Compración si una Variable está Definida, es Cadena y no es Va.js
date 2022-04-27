//Mejora Compración si una Variable está Definida, es Cadena y no està Vacia


function validarVariable(cadena){
    return typeof cadena != 'undefined' && cadena != null && cadena.length > 0
    && typeof cadena.valueOf() == 'string';
}

console.log(validarVariable('JavaScript'));
//console.log(validarVariable(nombre));
console.log(validarVariable(''));
console.log(validarVariable([2,3,5]));