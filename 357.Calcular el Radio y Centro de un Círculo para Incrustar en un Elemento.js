//Calcular el Radio y Centro de un Círculo para Incrustar en un Elemento

let ancho = 300;
let alto = 200;

//Cálculo del radio del circulo:
let radioCirculo = Math.min(ancho, alto) / 2;

//Cálculo del centro del circulo:
let x = ancho / 2;
let y = alto / 2;

console.log(radioCirculo);
console.log(x);
console.log(y);