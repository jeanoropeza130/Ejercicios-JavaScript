//Usar Symbol() como Propiedad Identificadora de un Objeto

const ID = Symbol();

let persona = {
    [ID]: '12345',
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 27
};

console.log(persona);
console.log(persona[ID]);
