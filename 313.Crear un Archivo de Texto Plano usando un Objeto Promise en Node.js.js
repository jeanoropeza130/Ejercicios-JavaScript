//Crear un Archivo de Texto Plano usando un Objeto Promise en Node.js

const fs = require('fs');

let promesaEscrituraArchivo = new Promise((resolve, reject) => {
fs.writeFile('ex313_archivo_texto.txt', ' v.10.0', (error) => {
    if(error){
        reject(error);
    }else {
        resolve();
    }
 });
});

promesaEscrituraArchivo
.then(() => {
    console.log('La escritura del archivo ha sido satisfactoria.');
})
.catch((error) => {
    console.log('Ha ocurrido un error: ' + error);
})