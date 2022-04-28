//Crear una Función Personalizada para Convertir Radianes a Grados

function convertirRadianesGrados(radianes){
    return radianes * (180/Math.PI);

}

console.log(convertirRadianesGrados(Math.PI/2));
console.log(convertirRadianesGrados(Math.PI));
console.log(convertirRadianesGrados(Math.PI*2));