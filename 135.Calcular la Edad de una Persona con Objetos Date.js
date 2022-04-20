// Calcular la Edad de una Persona con Objetos Date

// Solucion:

let fechaNacimiento = new Date('10/02/2019')
let ahora = new Date();
let edad = ahora.getFullYear() - fechaNacimiento.getFullYear();


fechaNacimiento.setFullYear(ahora.getFullYear());

if(ahora < fechaNacimiento) {
    edad--;
}


console.log(`La edad de la persona es: ${edad}`);