//Crear un Objeto Promise para Ejecución Satisfactoria de Código Asíncrono

//const { resolve } = require("path")

let promesa = new Promise(function(resolve, reject) {
    resolve('La ejecuciòn del proceso ha sido satisfactoria')
});

promesa
.then(function(mensaje){
    console.log(mensaje);
}, function(error){
    console.log(error);
});

