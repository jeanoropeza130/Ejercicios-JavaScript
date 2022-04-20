//Eliminar Todo el Contenido de un Arreglo

//Solucion:

let lenguajes = ["PHP", "JS", "CSS", "Python", "Ruby"];

console.log(lenguajes.length);
console.log(lenguajes);

console.log();

//Metodo 1:

lenguajes.length = 0;
console.log(lenguajes.length);
console.log(lenguajes);

console.log();

//Metodo 2:
lenguajes = ["PHP", "JS", "CSS", "Python", "Ruby"];
lenguajes = [];
console.log(lenguajes.length);
console.log(lenguajes);
lenguajes = [];
console.log(lenguajes.length);
console.log(lenguajes);
