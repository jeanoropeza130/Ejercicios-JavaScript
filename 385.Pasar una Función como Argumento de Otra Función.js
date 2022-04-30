//Pasar una Función como Argumento de Otra Función

function calcular (fn, x, y){
    return fn(x,y);
}

let sumar = function (a,b){
    return a+b;
}

let resultado = calcular(sumar, 2, 3);
console.log(resultado);


console.log();

let restar = function (a,b){
    return a-b;
}
resultado = calcular(restar, 2, 3);
console.log(resultado);