//Realizar Operaciones Básicas sobre Arreglos o Listas

//Creacion:

let lenguajes = ['JavaScript', 'Python', 'Java', 'PHP'];
console.log(lenguajes.length);

//Acceso:
console.log(lenguajes[0]);
console.log(lenguajes[1]);
console.log(lenguajes[2]);
console.log(lenguajes[3]);

//Actualizacion:
lenguajes[0] = 'JavaScript ES6';
console.log(lenguajes[0]);

//Eliminacion:
//delete lenguajes[3];

//console.log(lenguajes.length);
//console.log(lenguajes[3]);

lenguajes.pop();
console.log(lenguajes.length);

let numero = new Array(5);
