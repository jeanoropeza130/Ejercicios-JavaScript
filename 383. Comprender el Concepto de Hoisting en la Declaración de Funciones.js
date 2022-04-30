// Comprender el Concepto de Hoisting en la Declaración de Funciones

//hoisting == colocar arriba, subir, mover arriba

console.log(sumar(2,3));

function sumar(a,b){
    return a+b;
}

console.log(sumar(7,3));

console.log();


//console.log(restar(7,3)); No funciona
let restar = function(a,b){
    return a-b;
}

console.log(restar(7,3));
