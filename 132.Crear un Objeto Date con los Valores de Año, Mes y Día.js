// Crear un Objeto Date con los Valores de Año, Mes y Día

let agnio = 1994;
let mes = 5;
let dia = 21;

let fechaNacimiento = new Date(agnio, mes, dia);

console.log(typeof fechaNacimiento);
console.log(fechaNacimiento instanceof Date);
console.log(fechaNacimiento);