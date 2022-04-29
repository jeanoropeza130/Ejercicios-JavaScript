//Usar every() que Todos los Valores de un Arreglo Superan una Prueba

let colores = ['Blanco', 'Negro', 'Rojo', 'Verde', '@zul', 'gris'];

function validarNombresColores(color){
    let re = /^[a-zA-Z]+$/;
    return re.test(color);
}

let resultado = colores.every(validarNombresColores);
console.log(resultado);

colores[4] = 'Azul';
colores[5] = 'Gris';
resultado = colores.every(validarNombresColores);
console.log(resultado);