//Usar el Método forEach para Recorrer un Arreglo

let lenguajes = ['JavaScript', 'C#', 'PHP', 'Java', 'Python'];

lenguajes.forEach(function(valor, indice){
    console.log(`${valor} se encuentra en el indice ${indice}`);
});

console.log();

function recorridoArreglo(valor,) {
    console.log(`${valor}`);
}

lenguajes.forEach(recorridoArreglo);

console.log();

lenguajes.forEach((valor, indice) => {
    console.log(`${valor} se encuentra en el indice ${indice}`);
});

console.log();

let recorrerArreglo = (valor, indice) => {
    console.log(`${valor} se encuentra en el indice ${indice}`);
};