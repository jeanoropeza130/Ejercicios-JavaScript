//Uso del Método includes para Comprobar la Presencia de una Subcadena

var sentence = 'The quick brown fox jumps over the lazy dog.';

var word = 'fox';
var word1 ='Fox';

console.log(`The word "${word}" ${sentence.includes(word,)? 'is': 'is not'} in the sentence.`);
console.log(`The word "${word}" ${sentence.includes(word1,)? 'is': 'is not'} in the sentence.`);
console.log(`The word "${word}" ${sentence.includes(word, 20)? 'is': 'is not'} in the sentence.`);

//////////////////////////////////////////////////////////////////////////////////
console.log();

var sentencia = 'El veloz zorro marrón salta sobre el perro perezoso.'
var palabra = 'zorro';
console.log(`La palabra "${palabra}" ${sentencia.includes(palabra,)? 'esta': 'no esta'} en la sentencia.`);