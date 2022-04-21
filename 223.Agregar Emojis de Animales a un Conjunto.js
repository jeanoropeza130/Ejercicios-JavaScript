//Agregar Emojis de Animales a un Conjunto

let cerdo = '🐷';
let panda = '🐼';
let tortuga = '🐢';
let ardilla = '🐿';
let gato = '🐱';

let animales = new Set();
animales.add(cerdo);
animales.add(cerdo);
animales.add(panda);
animales.add(tortuga);
animales.add(tortuga);
animales.add(tortuga);
animales.add(ardilla);
animales.add(gato);
animales.add(gato);

console.log(animales);
console.log(animales.size);

console.log();

console.log(animales.has(gato));

animales.clear();

console.log(animales.size);

