//Parte 1/2: Crear una Clase de Objeto en ES5 y ES6

//ECMAScript 6:

class Persona{
    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    saludar(){
        return `Hola, soy: ${this.nombre}  ${this.apellido}`;
    }
}

let edward = new Persona('Edward', 'Garcia', 'edward@mail.com');
console.log(edward.saludar());

let daniela = new Persona('Daniela', 'Garcia', 'daniela@mail.com')
console.log(daniela.saludar());