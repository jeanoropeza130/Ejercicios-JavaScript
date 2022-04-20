//Obtener y Recorrer las Llaves de un Objeto

let persona = {id: 101, nombre: 'Edward', apellido: 'Ortiz', email:'edw@mail.com'};

console.log(typeof Object.keys(persona));
console.log(Object.keys(persona) instanceof Array);
console.log(Object.keys(persona));

console.log();

Object.keys(persona).forEach((valor) => {
    console.log(valor);
});