//Crear una Función Constructora para la Creación de Objetos

function Persona(nombre, apellido, edad, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
}

let jose = new Persona('Jose', 'Perez', 30, 'jose@mail.co');
console.log(jose);

console.log();

console.log(jose.nombre);
console.log(jose.apellido);
console.log(jose.edad);
console.log(jose.email);
