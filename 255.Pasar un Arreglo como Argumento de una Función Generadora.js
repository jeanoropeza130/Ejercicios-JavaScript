//Pasar un Arreglo como Argumento de una Función Generadora

//function * iterarValores(arreglo){ Generalos los valores del Arreglo
//    for(const e of arreglo){
//       yield e;
//    }
//}

console.log();

function * iterarValores(arreglo){ // Geners las posiciones del Arreglo
    for(const e in arreglo){
        yield e;
    }
}

let generador = iterarValores([2,3,5,7,11,13]);

for (const valor of generador){
    console.log(valor);

}

console.log(generador.next());