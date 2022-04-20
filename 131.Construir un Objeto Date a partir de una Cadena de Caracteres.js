// Construir un Objeto Date a partir de una Cadena de Caracteres

let cadena = 'May 21, 1994';
let fechaNacimiento = new Date(cadena);

console.log(typeof fechaNacimiento);
console.log(fechaNacimiento instanceof Date);
console.log(fechaNacimiento);