//Promocionar Valores a Tipo Cadena de Caracteres (String)

console.log(String('JavaScript'));
console.log(String(5));
console.log(typeof String(5));
console.log(String (false));
console.log(String (true));

let objeto = {nombre: 'German Ortiz', id:123456789};
console.log(String(objeto));

let numeros = [2, 3, 5, 7];
console.log(String(numeros));
console.log(numeros.join(','));

let sumar = (a, b) => {return a + b};
console.log(String(sumar));

console.log();

console.log(String(null));
console.log(String(undefined));

console.log();

console.log(String(/abc/));

console.log();

objeto = {toString: function() {return '¡Hola!'}};

console.log(String(objeto));