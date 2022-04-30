//Comparar la Programación Imperativa vs la Programación Funcional

let numeros = [2, 3, 5, 7, 11, 13];

//Progamacion imperativa:
let suma = 0;
for(let i = 0; i < numeros.length; i++){
    suma += numeros[i];
}

console.log(suma);

console.log();

//Programacion Funcional:

suma = numeros.reduce((a,b) => a+b);
console.log(suma);



