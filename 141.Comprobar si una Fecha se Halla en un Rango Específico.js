//Comprobar si una Fecha se Halla en un Rango Específico

function comrpobarFechaRango(fecha1, fecha2, fecha3){
    return fecha3.getTime() > fecha1.getTime() && fecha3.getTime() < fecha2.getTime();
}

let fecha1 = new Date('1/1/2019');
let fecha2 = new Date('2/1/2019');

let fecha3 = new Date('1/15/2019');

console.log(comrpobarFechaRango(fecha1, fecha2, fecha3));

fecha3 = new Date(11/23/2019)
console.log(comrpobarFechaRango(fecha1, fecha2, fecha3));