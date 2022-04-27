//Función de Extracción de Lista de Elementos a partir de una Cadena

function extraerListaElementos(frase){
    let inicio = frase.indexOf(':');
    let fin = frase.indexOf('.', inicio);
    
    let listadoCadena = frase.substring(inicio + 1, fin);
    
    let lenguajes = listadoCadena.split(',');

    return lenguajes;
   
}

let frase = 'Lenguajes de programaciòn. Los màs popuñares son: JavaScript, Python, Java, C++.';
let resultado = extraerListaElementos(frase);

console.log(resultado.length);
console.log(resultado);