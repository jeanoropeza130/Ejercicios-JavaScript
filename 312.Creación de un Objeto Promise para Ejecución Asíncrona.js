//Creación de un Objeto Promise para Ejecución Asíncrona

let promesa = new Promise(function(resolve, reject){
const a = 1;
const b = 2;

if (a == b){
    resolve();
}else{
    reject();
}

});

promesa.then(function(){
    console.log('Son iguales');
})
.catch(function(){
console.log('Son diferentes');
})