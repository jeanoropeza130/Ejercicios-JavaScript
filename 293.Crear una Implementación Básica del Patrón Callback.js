//Crear una Implementación Básica del Patrón Callback


function exito(){
    console.log('La funcion se ejecutò de forma satisfactoria');
}

function fallo(){
    console.log('La funcion fallò.');
}

function ejecutarProceso(nombre, exito, fallo){
    if(nombre == 'Edward'){
        exito();
    }else {
        fallo();
    }
    
}

ejecutarProceso('Edgard', exito, fallo);
ejecutarProceso('Edward', exito, fallo);