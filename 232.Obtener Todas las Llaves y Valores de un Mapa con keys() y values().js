//Obtener Todas las Llaves y Valores de un Mapa con keys() y values()

let produccion = new Map();

produccion.set('ENE', 100);
produccion.set('FEB', 150);
produccion.set('MAR', 130);

console.log(produccion);
console.log(produccion.size);
console.log();

let llaves = produccion.keys();
console.log(llaves);
console.log(llaves.next());
console.log(llaves.next());
console.log(llaves.next());
console.log(llaves.next());
console.log(llaves.next());

console.log();

let valores = produccion.values();
console.log(valores);
console.log(valores.next());
console.log(valores.next());
console.log(valores.next());
console.log(valores.next());
console.log(valores.next());