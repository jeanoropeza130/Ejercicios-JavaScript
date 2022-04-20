// Obtener un Subconjunto de Elementos de un Arreglo

// Solution:

let lenguajes = ['JavaScript', 'Python', 'Ruby', 'Java', 'C#', 'C++'];

console.log(lenguajes);

let resultado = lenguajes.slice(0, 3);
console.log(resultado);

resultado = lenguajes.slice(3, lenguajes.length);
console.log(resultado);

console.log();

resultado = lenguajes.slice(3, lenguajes.length - 1);
console.log(resultado);