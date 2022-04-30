//Sumar los n Argumentos de una Función Independiente de su Representación


// 5, "5"; '5', `5`

function sumar(){
    let numeros = [].slice.call(arguments);

   return numeros.reduce((a, b) => parseFloat(a) + parseFloat(b));
}

console.log(sumar(5, "5", '5', `5`));
console.log(sumar(5.5, "5.5", '5.5', `5.5`));
console.log(sumar(5, 5.5, '5', `5.5`));