//Crear un Método de Instancia en una Clase Personalizada

class Persona {
    constructor(nombre, apellido, edad, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }

    mostrarDatos(){
        console.log('Nombre: ' + this.nombre);
        console.log('Apellido: ' + this.apellido);
        console.log('Edad: ' + this.edad);
        console.log('Email: ' + this.email);
    }
}

let persona = new Persona('Juan', 'Perez', 30, 'juan@mail.com');

console.log(persona);

persona.mostrarDatos()