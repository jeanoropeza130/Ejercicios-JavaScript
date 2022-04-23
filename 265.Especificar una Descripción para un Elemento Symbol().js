//Especificar una Descripción para un Elemento Symbol()

const ID = Symbol('ID para literal de objeto');

let persona = {
    [ID]: '12345',
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 27
};

console.log(persona);
console.log(Symbol('ID para literal de objeto') == Symbol('ID para literal de objeto'));
