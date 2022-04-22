//Usar las Propiedades de un Objeto como Parámetros de una Función

//Object destructuring //Destructuracion de un objeto

function obtenerNombreEs5(objeto){
    let nombre = objeto.nombre;
    console.log(nombre);
}

//Em6

function obtenerNombreEs6({nombre, edad}){
    console.log(nombre);
    console.log(edad);
}

let persona = {nombre: 'Daniela', apellido:'Oropeza', edad:'37'};

obtenerNombreEs5(persona);
console.log();
obtenerNombreEs6(persona);