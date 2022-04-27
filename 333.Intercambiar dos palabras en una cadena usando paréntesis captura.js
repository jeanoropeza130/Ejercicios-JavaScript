//Intercambiar dos palabras en una cadena usando paréntesis captura

//Jean Oropeza => Oropeza, Jean


let nombre = 'Jean Oropeza';
let patron = /^(\w+)\s(\w+)$/;

let resultado = nombre.replace(patron, '$2, $1');

console.log(nombre);
console.log(resultado);