//Simplificar Expresión Condicional para Reemplazo en un Arreglo


function marcarElementos(color, indice, colores) {
(color == 'Negro') && (colores[indice] = '##');
}

let colores = ['Blanco', 'Negro','Rojo', 'Negro', 'Verde', 'Azul', 'Negro' ];
console.log(colores);

colores.forEach(marcarElementos)
console.log(colores);