//Determinar si una Cadena de Caracteres Empieza con una Palabra Específica

//starsWith 

let cadena = 'Firefox es genial';

console.log(cadena.startsWith('Firefox'));
console.log(cadena.startsWith('firefox')); //no existe false

console.log();

console.log(cadena.startsWith('Fire'));
console.log(cadena.startsWith('Firefox '));