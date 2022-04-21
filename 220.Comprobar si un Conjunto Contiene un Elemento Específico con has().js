//Comprobar si un Conjunto Contiene un Elemento Específico con has()

let lenguajes = new Set();
lenguajes.add('Java');
lenguajes.add('C++');
lenguajes.add('C');
lenguajes.add('PHP');
lenguajes.add('Python');

console.log(lenguajes);

console.log(lenguajes.has('JavaScript'));

console.log();

lenguajes.add('JavaScript');
console.log(lenguajes);
console.log(lenguajes.has('JavaScript'));