//Iterar las Propiedades de un Objeto Creado con la Clase Object

let persona = new Object();
persona.documento = '1234567890';
persona.nombre = "Juan";
persona.apellido = "Perez";
persona.edad = 25;
persona.email = 'juan@mail.com';

console.log(persona);
console.log(persona.documento);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);

console.log();

Object.keys(persona).forEach((atributo) => {
    console.log(atributo, persona[atributo]);
})
