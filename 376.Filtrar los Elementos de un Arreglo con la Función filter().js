// Filtrar los Elementos de un Arreglo con la Función filter()

let colores = ['Blanco', 'Negro', 'Rojo', 'Negro', 'Verde', 'Azul', 'Negro'];

console.log(colores);

colores.forEach((color, indice, colores) =>{
    if(color == 'Negro') colores[indice] = '##';
})

console.log(colores);

console.log();

//Filter

let resultado = colores.filter((color) => {
 return color != '##'
})

console.log(resultado);