//Eliminar Elementos de un Arreglo con la Función splice()

let colores = ['Blanco', 'Negro','Rojo', 'Verde', 'Azul', 'Gris'];

console.log(colores.length);
console.log(colores);

console.log();

colores.splice(colores.indexOf('Negro'), 1);
console.log(colores.length);
console.log(colores);

console.log();

colores.splice(colores.indexOf('Azul'), 2);
console.log(colores.length);
console.log(colores);