//Función para Eliminar Todos las Ocurrencias de un Valor en un Arreglo

function eliminarOcurrencias(arreglo, valor){
    while(arreglo.indexOf(valor) != -1){
        arreglo.splice(arreglo.indexOf(valor), 1);
     }
    }
    
    let colores = ['Blanco', 'Negro','Rojo', 'Negro', 'Verde', 'Azul', 'Negro' ];
    console.log(colores.length);
    console.log(colores);
    
    console.log();

    eliminarOcurrencias(colores, 'Negro');
    console.log(colores.length);
    console.log(colores);