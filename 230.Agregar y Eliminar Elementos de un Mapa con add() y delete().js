//Agregar y Eliminar Elementos de un Mapa con add() y delete()

let produccion = new Map();

produccion.set('ENE', 100);
produccion.set('FEB', 150);
produccion.set('MAR', 130);

console.log(produccion);
console.log(produccion.size);
console.log(produccion.get('ENE'));
console.log();

produccion.delete('ENE');
console.log(produccion);
console.log(produccion.size);
console.log();

console.log(produccion.delete('NOV'));
console.log(produccion);
console.log(produccion.size);
console.log();

produccion.set('NOV', 200); //ADD AGREGAR
console.log(produccion);



