//Crear una Jerarquía de Herencia con la Palabra Clave extends

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
    saludar(){
        return `Hola, me llamo ${this.nombre} ${this.apellido}`;
    }
}



class Estudiante extends Persona{
    constructor(nombre, apellido, carnet, carrera){
        super(nombre, apellido);
        this.carnet = carnet;
        this.carrera = carrera;
    }

}

let sergio = new Estudiante('Sergio', 'Garcia', '12345', 'Ingenieria en Sistemas');

console.log(sergio);
console.log(sergio.saludar());