//005.Crear una Constante por medio de la Sentencia const

var nombre = 'Eduard';
let leguaje = 'JavaScript';
const PI = '3.141592';

nombre = 'Eduard Ortiz';
lenguaje = 'JavaScript ES6';
//PI = '3.141592'; Genera Error TypeError: Assignment to constant variable.

const estudiante = {'id': 6, 'nombre': 'German Ortiz'};

console.log(estudiante);

estudiante.id = 7;

console.log(estudiante);

// estudiante = {'id': 8, 'nombre': 'Daniela Ortiz'}; TypeError: Assignment to constant variable.

// console.log(estudiante);