// Comprobar si una Variable está Definida, es una Cadena y no está Vacía


function validarVariable(cadena){
    return typeof cadena === 'string' && cadena.length > 0;
}

console.log(validarVariable('JavaScript'));
//console.log(validarVariable(nombre));
console.log(validarVariable(''));