//Crear un Arreglo a partir de un Objeto Iterable con Array.from

//Solution:

function crearArreglo(){
    return Array.from(arguments);
}

let arreglo = crearArreglo(1, 2, 3);
console.log(arreglo);
console.log(arreglo instanceof Array);
