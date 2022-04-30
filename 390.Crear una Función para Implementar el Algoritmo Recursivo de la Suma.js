//Crear una Función para Implementar el Algoritmo Recursivo de la Suma

//Analisis:
// a = 2, b = 3
//1+1+1+1+1 = 5

function sumar(a, b){
    return b == 0 ? a : sumar(a + 1, b - 1);
}

console.log(sumar(2,3));
console.log(sumar(7,3));
console.log(sumar(10,3));
console.log(sumar(7,11));
