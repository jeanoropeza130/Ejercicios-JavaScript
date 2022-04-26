// Realizar una Búsqueda Condicional de Texto con una Expresión Regular

let frase = 'JavaScript es un lenguaje de programacion.';
let patron = /JavaScript|PHP/g;

let resultado = patron.exec(frase);

console.log(resultado);

console.log()

frase = 'PHP es un lenguaje de programacion.';
patron = /JavaScript|PHP/g;
resultado = patron.exec(frase);

console.log(resultado);

