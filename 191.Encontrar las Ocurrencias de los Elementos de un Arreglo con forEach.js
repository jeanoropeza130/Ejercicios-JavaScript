//Encontrar las Ocurrencias de los Elementos de un Arreglo con forEach

//Solution:

let numeros = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 6, 7, 8];

let conteo = {};

let ocurrencias = numeros.forEach((valor) => {
   if(conteo[valor]) {
       conteo[valor] += 1;
   } else {
        conteo[valor] = 1;
   }
});

console.log(numeros);

console.log(conteo);