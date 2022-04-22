//Iterar Todos los Elementos de una Mapa con la Función forEach()

let produccion = new Map();

produccion.set('ENE', 100);
produccion.set('FEB', 150);
produccion.set('MAR', 130);
produccion.set('ABR', 200);
produccion.set('MAY', 220);

console.log(produccion);

console.log();

produccion.forEach((valor, llave) => {
    console.log(llave + ': ' + valor);
});

console.log();

produccion.forEach((llave, mapa) => {
    console.log(llave, mapa.get(llave));
});


