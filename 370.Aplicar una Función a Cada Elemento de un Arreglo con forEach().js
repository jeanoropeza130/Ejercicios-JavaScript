//Aplicar una Función a Cada Elemento de un Arreglo con forEach()

let colores = ['Blanco', 'Negro','Rojo', 'Negro', 'Verde', 'Azul', 'Negro' ];
console.log(colores);

colores.forEach((color, indice, colores) => {
    if(color == 'Negro'){
        colores[indice] = '##';
    }
})

console.log(colores);