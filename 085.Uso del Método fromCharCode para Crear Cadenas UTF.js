//Uso del Método fromCharCode para Crear Cadenas UTF

console.log(String.fromCharCode(189, 43, 190, 61));

let cadena = '\u0041'
console.log(cadena);
console.log(String.fromCharCode(0x41));

console.log(String.fromCharCode(0xA7));
console.log(String.fromCharCode(0x41, 0x42, 0x43));