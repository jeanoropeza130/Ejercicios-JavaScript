//La Programación Orientada a Objetos No Existe en JavaScript

class Persona{
    constructor(nombre, apellido, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    saludar(){
        return `Hola, soy ${this.nombre}.`;
    }

}

let edward = new Persona('Edward', 'Garcia', 'edward@mail.com');
console.log(edward.saludar());