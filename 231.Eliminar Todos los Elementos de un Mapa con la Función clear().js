//Eliminar Todos los Elementos de un Mapa con la Función clear()

let produccion = new Map();

produccion.set('ENE', 100);
produccion.set('FEB', 150);
produccion.set('MAR', 130);

console.log(produccion);
console.log(produccion.size);
console.log(produccion.get('ENE'));
console.log();

produccion.clear();
console.log(produccion);