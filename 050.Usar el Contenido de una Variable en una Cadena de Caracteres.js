//Usar el Contenido de una Variable en una Cadena de Caracteres

let numero = 6;
let cadena = 'JavaScript numero'; //NO
console.log(cadena);
cadena = "JavaScript numero" //NO
console.log(cadena);
/////////////////////////////////////////////////////////////////
cadena = `JavaScript ${numero + 1}`; 
console.log(cadena);

console.log();

let persona = {nombre: 'Edward', apellido:'Ortiz', id:101};
console.log('Su nombre completo es: ' + persona.nombre + ' ' + persona.apellido + 'y su ID es: ' + persona.id);

console.log();

console.log(`Su nombre completo es ${persona.nombre } ${persona.apellido} y su ID es: ${persona.id}`);

