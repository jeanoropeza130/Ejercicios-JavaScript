//Parte 1/2: Crear una Clase de Objeto en ES5

//ECMAScript 5:

let Persona = (function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
});

Persona.prototype.saludar = function(){
    return 'Hola, soy: ' + this.nombre + ' ' + this.apellido;
}

let edward = new Persona('Edward', 'Garcia', 'edward@mail.com');
console.log(edward.saludar());

let daniela = new Persona('Daniela', 'Garcia', 'daniela@mail.com')
console.log(daniela.saludar());

