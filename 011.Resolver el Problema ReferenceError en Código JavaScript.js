//Resolver el Problema ReferenceError en Código JavaScript

//Error tipico:
//ReferenceError: mensaje is not defined 

//console.log(mensaje); //ReferenceError: mensaje is not defined 

function mostrarSaludo(){
    var mensaje = 'Hola... Este codigo se ejecuta en una funcion';

    console.log(mensaje);
}

//console.log(mensaje); //ReferenceError: mensaje is not defined 

var numero = 7;

function mostrarNumero(){
    console.log('El numero es: ' + numero);
}

mostrarNumero();