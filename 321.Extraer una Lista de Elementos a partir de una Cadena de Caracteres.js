//Extraer una Lista de Elementos a partir de una Cadena de Caracteres

let frase = 'Lenguajes de programaciòn. Los màs popuñares son: JavaScript, Python, Java, C++.';

let inicio = frase.indexOf(':');
let fin = frase.indexOf('.', inicio);

let listadoCadena = frase.substring(inicio + 1, fin);

console.log(inicio);
console.log(fin);
console.log(listadoCadena);

console.log();

let lenguajes = listadoCadena.split(',');
console.log(lenguajes.length);
console.log(lenguajes);