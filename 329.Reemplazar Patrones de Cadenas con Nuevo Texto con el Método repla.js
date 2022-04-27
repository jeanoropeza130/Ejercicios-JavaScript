//Reemplazar Patrones de Cadenas con Nuevo Texto con el Método replace().

let texto = 'Kotlin es tremendo. Python es genial.';
console.log(texto);

//let expresionRegular = /\b[A-Z][a-z]{5}\b/g;
let expresionRegular = new RegExp('[A-Z][a-z]{5}', 'g');

let resultado = texto.replace(expresionRegular, '$&\u00A9');
console.log(resultado);



