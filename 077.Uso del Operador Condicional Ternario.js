//Uso del Operador Condicional Ternario

// condicion ? : expresion_1 : expresion_2

let edad = 17;
let resultado;

if (edad < 18){
    resultado = "Menor de edad";
} else {
    resultado = "Mayor de edad";
}

console.log(resultado);
console.log();

resultado = edad < 18 ? "Menor de edad" : "Mayor de edad";

console.log(resultado);

console.log();

edad = 27
resultado = edad <= 12 ? 'Niño' : edad < 18 ? 'Adolescente' : 'Adulto';
console.log(resultado);