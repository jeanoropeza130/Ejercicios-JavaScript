//Obtener las Partes o Palabras de una Cadena de Caracteres con split

let cadena = 'JavaScript es un lenguaje de programacion';

let palabras = cadena.split(' ');
console.log(palabras);

console.log();

cadena = 'xyz';
let partes = cadena.split('y');
console.log(partes);


console.log();

let ruta = '/var/www/html/ortizol';
let carpetas = ruta.split('/');
console.log(carpetas);

carpetas = ruta.split(/\//g);
console.log(carpetas);

carpetas = ruta.split('/', 3);
console.log(carpetas);
