//Comprobar si una Cadena de Caracteres Cumple con Formato de Fecha

// DD-MM-AAAA HH:MM

let patron = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;

let fecha = '11-12-2019 12:34';

console.log(patron.test(fecha));

fecha = '2019-12-11 17:41';
console.log(patron.test(fecha));

