//Uso del Operador de Disyunción Lógica O

// || -> Or -> O -> o inclusivo


let computador1 = {id:1, marca: 'Intel', ram: '16'};


if((computador1.marca == 'Intel' || computador1.marca == 'AMD' ) && computador1.ram >= 8 ){
    console.log('El computador Nro. 1 puede ejecutar Age of Empires IV.');
} else {
    console.log('El computador Nro. 1 NO puede ejecutar Age of Empires IV.');
}
console.log();

let computador2 = {id:2, marca: 'ARM', ram: '32'};

if((computador2.marca == 'Intel' || computador2.marca == 'AMD' ) && computador2.ram >= 8 ){
    console.log('El computador Nro. 2 puede ejecutar Age of Empires IV.');
} else {
    console.log('El computador Nro. 2 NO puede ejecutar Age of Empires IV.');
}