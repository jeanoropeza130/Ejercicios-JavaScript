//Mejora Función de Extracción Lista de Elementos a partir de una Cadena

function extraerListaElementos(frase){
    let inicio = frase.indexOf(':');
    let fin = frase.indexOf('.', inicio);
    
    let listadoCadena = frase.substring(inicio + 1, fin);
    
    let listado = listadoCadena.split(',');

    listado.forEach((valor, indice, arreglo) => {
        arreglo[indice] = valor.trim();
    })

    return listado;
   
}

let frase = 'Lenguajes de programaciòn. Los màs populares son: JavaScript, Python, Java, C++.';
let resultado = extraerListaElementos(frase);

console.log(resultado.length);
console.log(resultado);