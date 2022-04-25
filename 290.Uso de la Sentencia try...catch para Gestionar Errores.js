//Uso de la Sentencia try...catch para Gestionar Errores

//let numeros = new Array(-1); //Genera error RangeError: Invalid array length

try{
    let numeros = new Array(-1); 
} catch (RangeError){
    console.log("Se ha producido un Error ");
}