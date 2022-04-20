//Agregar o Remover Elementos de un Arreglo con splice

// Solution:

let lenguajes = ['Java', 'Python', 'Ruby', 'PHP'];

console.log(lenguajes);

lenguajes.splice(2, 0, 'JavaScript');

console.log(lenguajes);

lenguajes.splice(1, 0, 'C#');
console.log(lenguajes);

console.log();
lenguajes.splice(3, 2);
console.log(lenguajes);