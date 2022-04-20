//Uso de la Función toExponential de la Clase Number

function expo(x, f){
    return Number.parseFloat(x).toExponential(f);
}

console.log(expo(123456,2));

console.log(expo('123456'));

console.log(expo('oink'));