//Aplicar un Filtro a un Arreglo para Extraer Elementos con Array.filter

// Solution:

let numeros = [7, 3, 2, 0, 5, 11, 13, -5];

console.log(numeros);

let resultado = numeros.filter((valor) => {
  return valor >= 5;
});

console.log(resultado);
