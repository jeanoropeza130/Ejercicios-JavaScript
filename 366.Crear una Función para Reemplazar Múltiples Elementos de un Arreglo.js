//Crear una Función para Reemplazar Múltiples Elementos de un Arreglo

function reemplazarMultiplesElementos(arreglo, valor, nuevoValor){
while(arreglo.indexOf(valor) != -1){
    arreglo.splice(arreglo.indexOf(valor), 1, nuevoValor);
 }
}

let colores = ['Blanco', 'Negro','Rojo', 'Negro', 'Verde', 'Negro', 'Azul'];
console.log(colores);


reemplazarMultiplesElementos(colores, 'Negro', 'Blanco');
console.log(colores);