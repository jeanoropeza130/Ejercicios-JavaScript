//Crear una Función Anónima como Callback de la Función setTimeout

setTimeout(function(){
    console.log('El temporizador ha llegado a cero...');
}, 5000);

let mensaje = function(){
    console.log('Otro mensaje...');
}

setTimeout(mensaje, 7000);