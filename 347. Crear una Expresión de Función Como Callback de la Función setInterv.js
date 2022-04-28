// Crear una Expresión de Función Como Callback de la Función setInterval()

let mostrarMensaje = () => {
    console.log('Se ha ejecutado el callback');
}

setInterval(mostrarMensaje, 3000);