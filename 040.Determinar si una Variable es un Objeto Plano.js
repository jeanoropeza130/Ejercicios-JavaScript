//Determinar si una Variable es un Objeto Plano

let objetoPlano1 = {}
let objetoPlano2 = new Object();

let fecha = new Date();
let cadena = new String();

console.log(objetoPlano1.constructor === Object);
console.log(objetoPlano2.constructor === Object);

console.log();

console.log(fecha.constructor === Object);
console.log(cadena.constructor === Object);