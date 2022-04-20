//Iterar por Todas las Propiedades de un Objeto con el Ciclo for...in

//Solution:

let persona = {nombre: 'Daniela', apellido:'Ortiz', edad: 26, email:'daniela@mail.com'};

for(let p in persona){
    console.log('Propiedad:', p, 'Valor:', persona[p]);
}