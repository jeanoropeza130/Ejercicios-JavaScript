//Sustituir Elementos de un Arreglo Sin Modificar el Arreglo Original


let colores = ['Blanco', 'Negro','Rojo', 'Negro', 'Verde', 'Azul', 'Negro' ];
console.log(colores);

let resultado = colores.map((color, index, colores) => {
    return  color == 'Negro' ? '##' : color;
});

console.log();
console.log(colores);
console.log(resultado);
console.log(colores === resultado);