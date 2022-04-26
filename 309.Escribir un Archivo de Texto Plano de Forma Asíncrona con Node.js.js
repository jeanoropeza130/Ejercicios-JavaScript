//Escribir un Archivo de Texto Plano de Forma Asíncrona con Node.js

const fs = require('fs');

fs.appendFile('Parte001/ex309_saludo.txt', '\nHola Node.js!', (error) => {
    if (error){

        throw error;    
    }

    console.log('El archivo se ha guardado de forma satisfactoria.');   
})
