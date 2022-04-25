//Atrapar un Error de Tipo ReferenceError con try...catch

try{
let resultado = 5/a;
} catch (ReferenceError){
    console.log("Se ha producido un Error reference error");
}

console.log('...');
