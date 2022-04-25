//Usar una Expresión Regular para Reemplazar Texto

let frase = 'javascript es un lenguaje de programacion interpretado.';
console.log(frase);

let patron = /javascript/i;

frase = frase.replace(patron, 'JavaScript');
console.log(frase);