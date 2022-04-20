// Invertir Todas las Cadenas de un Arreglo con la Función map de Array

//Solution:

let lenguajes = ['JavaScript', 'C#', 'PHP', 'Java', 'C++'];

let resultado = lenguajes.map((valor) => {
    return valor.split('').reverse().join('');
});

console.log(lenguajes);
console.log(resultado);

console.log();