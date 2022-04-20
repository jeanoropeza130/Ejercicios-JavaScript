//Verificar si Dos Objetos Fecha son Iguales con getTime

let fecha1 = new Date('November 23 2019 06:48:37');
let fecha2 = new Date('November 23 2019 06:48:33');

if(fecha1.getTime() == fecha2.getTime()){
    console.log('Las dos fechas son iguales.');
}else{
    console.log('Las dos fechas NO son iguales.');
}