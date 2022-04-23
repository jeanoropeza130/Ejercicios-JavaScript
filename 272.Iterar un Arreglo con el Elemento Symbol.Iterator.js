//Iterar un Arreglo con el Elemento Symbol.Iterator

let numeros = [2,3,5,7,11];

//for of:

for (const numero of numeros){
    console.log(numero);
}

// Symbol.iterator;

let iterador = numeros[Symbol.iterator]();
let iteracion = iterador.next()

console.log(iteracion);

while(!iteracion.done){
   
    let valor = iteracion.value;
    console.log(valor);

    iteracion = iterador.next();
}