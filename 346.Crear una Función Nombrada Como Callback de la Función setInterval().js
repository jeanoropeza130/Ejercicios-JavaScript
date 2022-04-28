//Crear una Función Nombrada Como Callback de la Función setInterval()

function mostrarMensaje(){
    console.log('Se ha ejecutado el callback');
}

setInterval(mostrarMensaje, 3000);