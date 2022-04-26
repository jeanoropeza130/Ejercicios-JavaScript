//Búscar Sólo Palabras en una Frase usando una Expresión Regular

let frase = 'JavaScript es un lenguaje de programaciòn. La ùltima version fue lanzada en Junio de 2018';

let patron = /[a-zA-Z]+/g;

let resultado = frase.match(patron);

console.log(resultado);