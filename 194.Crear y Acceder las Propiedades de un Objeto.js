// Crear y Acceder las Propiedades de un Objeto

// Solution:

let persona = {};

console.log(persona);

persona.nombre = 'Daniela';
persona['email'] = 'daniela@mail.com';
persona['correo-e'] = 'daniela@outlook.com';

console.log(persona);

persona.edad = '26';

console.log(persona.nombre);
console.log(persona['nombre']);
console.log(persona['correo-e']);