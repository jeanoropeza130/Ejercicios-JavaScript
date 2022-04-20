//Crear un Método para Eliminar un Elemento de un Arreglo

//Solucion

function eliminarElemento(arreglo, valor){
    return arreglo.filter((elemento) => {
        return elemento != valor;
     });
}

let numeros = [1, 2, 3, 4, 5, 4];

console.log(numeros);
console.log(eliminarElemento(numeros, 4));