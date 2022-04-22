//Estudiar la Diferencia entre un Objeto y un Mapa

let persona = {nombre: 'Edward', edad: 33, email: 'edwar@mail.com', 101: 'valor numerico'};

console.log(persona);

for (const p in persona){
    console.log(typeof p);
}

console.log();

let produccion = new Map();
produccion.set('ENE', 100);
produccion.set('FEB', 150);
produccion.set('MAR', 140);
produccion.set(101, 190);

console.log(produccion);

produccion.forEach((valor, llave, mapa) => {
    console.log(typeof llave);
})