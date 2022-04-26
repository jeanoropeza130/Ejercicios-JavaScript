//Crear un Objeto Promise para Ejecución Fallida de Código Asíncrono

let promesa = new Promise(function(resolve, reject) {
    reject('La ejecuciòn del proceso ha fallado')
});

promesa
.then(function(mensaje){
    console.log(mensaje);
}, function(error){
    console.log(error);
});