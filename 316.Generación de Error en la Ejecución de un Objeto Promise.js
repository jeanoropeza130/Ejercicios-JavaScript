//Generación de Error en la Ejecución de un Objeto Promise

let promesa = new Promise(function(resolove, reject){
    throw new Error('MENSAJE: Se ha generado un error.');
});

promesa
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
});