//Sobrescribir el Método de Instancia toString en una Función Constructora

function Persona(nombre, apellido, edad, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;

    this.mostrarDatos = function(){
        console.log('Nombre: ' + this.nombre);
        console.log('Apellido: ' + this.apellido);
        console.log('Edad: ' + this.edad);
        console.log('Email: ' + this.email);
    };

    this.toString = function(){
        return `Nombre: ${this.nombre} - Apellido: ${this.apellido} - Edad: ${this.edad} - Email: ${this.email}`;
    }
}

let jose = new Persona('Jose', 'Perez', 30, 'jose@mail.co');

console.log(jose);

console.log();

jose.mostrarDatos();

console.log();

console.log(jose.toString());
