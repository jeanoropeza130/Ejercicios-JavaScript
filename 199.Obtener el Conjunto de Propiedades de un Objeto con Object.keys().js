//Obtener el Conjunto de Propiedades de un Objeto con Object.keys()

let persona = {nombre: 'Jose', apellido: 'Perez', edad: 30, email: 'jose@mail.com'};

console.log(persona);

let atributos = Object.keys(persona);

console.log(atributos);

console.log();

atributos.forEach((atributo) => {
    console.log('Atributo', atributo, '- Valor:', persona[atributo]);
});