//Comprobar si una Llave Existe en un Mapa usando la Función has()

let produccion = new Map();

    produccion.set('ENE', 100);
    produccion.set('FEB', 150);
    produccion.set('MAR', 130);

    console.log(produccion);

    console.log(produccion.has('ENE'));
    console.log(produccion.has('ABR'));