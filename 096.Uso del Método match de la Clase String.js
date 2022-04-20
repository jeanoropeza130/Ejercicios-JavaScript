//Uso del Método match de la Clase String
//Mayusculas
var paragraph = 'The quick brown Fox jumps over the lazy dog. It barked. There are 2 dogs and 1';
var regex = /[A-Z]/g;
var found = paragraph.match(regex);

console.log(found);

//Minusculas
var regex = /[a-z]/g;
var found = paragraph.match(regex);

console.log(found);

//Numeros
var regex = /[0-9]/g; // No hay numeros
var found = paragraph.match(regex);

console.log(found);
