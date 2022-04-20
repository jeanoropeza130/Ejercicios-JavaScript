//Calcular la Longitud de un Número Entero

//123456789

//'123456789' => [''1, '2', '3', '4', '5', '6', '7', '8', '9']

function calcularLongitudNumero(numero){
    return numero.toString().split('').length;
}

let valor = 123456789;
console.log(calcularLongitudNumero(valor));

valor = 9513;
console.log(calcularLongitudNumero(valor));


