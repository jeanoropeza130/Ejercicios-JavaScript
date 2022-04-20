//Crear Objetos Fecha a partir d e Cadenas de Caracteres

let cadenaFecha = 'May 13, 1913 13:17:19';

let fecha = new Date(cadenaFecha);

console.log(cadenaFecha);

fecha.setUTCMonth(1);
console.log(fecha);

console.log();

// Crea fecha a partir del standard RFC 3339

cadenaFecha = '1913-05-13T13:17:19.23Z';

fecha = new Date(cadenaFecha)
console.log(fecha);