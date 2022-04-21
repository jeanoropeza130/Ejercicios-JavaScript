//Crear una Clase para Representar los Datos de una Persona

class Persona {
    constructor(nombre, apellido, edad, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }
}

let persona = new Persona('Juan', 'Perez', 30, 'juan@mail.com');

console.log(persona);

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);
