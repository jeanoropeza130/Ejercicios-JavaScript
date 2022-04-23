//Especificar Propiedades de un Objeto en una Literal de Plantilla

let persona = {nombre:'Jean', apellido:'Perez', email: 'jean@mail.com'}

let frase = 'Su nombre completo es: ' + persona.nombre + ' ' + persona.apellido + ' y su correo electronico es:' + persona.email + '.';

console.log(frase);

console.log();

frase = `Su nombre completo es: ${persona.nombre} ${persona.apellido} y su correo electronico es: ${persona.email}`;
console.log(frase);