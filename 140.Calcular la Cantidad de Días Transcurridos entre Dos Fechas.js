//Calcular la Cantidad de Días Transcurridos entre Dos Fechas

//Solucion:

let fecha1 = new Date('11/13/2018');
let fecha2 = new Date('11/19/2019');

let milisegundosDia = 24 * 60 * 60 * 1000;

let milisegundosTranscurridos = Math.abs(fecha1.getTime() - fecha2.getTime());

let dias = diasTranscurridos = Math.round(milisegundosTranscurridos/milisegundosDia);

console.log(fecha1);
console.log(fecha2);
console.log(milisegundosDia);
console.log(milisegundosTranscurridos);

console.log(diasTranscurridos);
