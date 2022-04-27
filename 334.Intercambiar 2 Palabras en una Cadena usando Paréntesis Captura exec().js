//Intercambiar 2 Palabras en una Cadena usando Paréntesis Captura exec()

//Jean Oropeza => Oropeza, Jean

let nombre = 'Jean Oropeza';
let patron = /^(\w+)\s(\w+)$/;

let resultado = patron.exec(nombre);

let nuevoNombre = `${resultado[2]}, ${resultado[1]}`;

console.log(nombre);
console.log(nuevoNombre);