//Buscar el Índice de un Objeto en un Arreglo a partir de una Propiedad

// Solution:

let daniela = {nombre: 'Daniela', apellido: 'García', edad: '23'};
let german = {nombre: 'German', apellido: 'Oropeza', edad: '29'};
let jean = {nombre: 'Jean', apellido: 'Benitez', edad: '33'};

let personas =[daniela, german, jean];

console.log(personas);

console.log();

let indice = personas.findIndex((objeto, indice, persona) => {
    return objeto.nombre === 'Jean';
}); 

console.log(indice);