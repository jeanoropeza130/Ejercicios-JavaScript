//Ejecutar una Función una vez se Cargue un Documento HTML

function documentoCargado(){
    alert ("El documento ya se cargo");
}

document.addEventListener('DOMContentLoaded', documentoCargado, false);