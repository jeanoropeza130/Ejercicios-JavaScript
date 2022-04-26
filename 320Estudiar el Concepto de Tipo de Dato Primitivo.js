//Estudiar el Concepto de Tipo de Dato Primitivo

//string, number, boolean, null, undefined

let nombre = 'Jean';
let precio = 299.99;
let llueve = false;
let valor = null;
let noDisponible = undefined;

console.log(nombre.length);
console.log(precio.toString());
console.log(llueve.valueOf());
///////////////////////////////////////////////////
let nombre2 = String('Jean');
let precio2 = Number('299.99');
let llueve2 = Boolean('false');

if(nombre === nombre2){
    console.log('Son iguales');
}else{
    console.log('No son iguales');
}

console.log();

let nombre3 = new String('Jean');

if(nombre === nombre3){
    console.log('Son iguales');
}else{
    console.log('No son iguales');
}

console.log();

console.log('Jean'.length);
