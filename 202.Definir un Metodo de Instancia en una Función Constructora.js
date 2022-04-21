//Definir un Método de Instancia en una Función Constructora

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
}

let jose = new Persona('Jose', 'Perez', 30, 'jose@mail.co');

console.log(jose);

jose.mostrarDatos();

console.log();

let daniela = new Persona('Daniela', 'Perez', 25, 'daniela@mail.com');

daniela.mostrarDatos();