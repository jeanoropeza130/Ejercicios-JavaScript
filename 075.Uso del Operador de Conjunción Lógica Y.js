//Uso del Operador de Conjunción Lógica Y

// && -< And -< Y

let edad = 19;
let salario = 1000;

if(edad >= 18 && salario >=800){
    console.log('La persona es candidata al credito online para elearning');
}else{
    console.log('Por favor intente en otra oportunidad.');
}
console.log();

edad =23;
salario = 700;

if(edad >= 18 && salario >=800){
    console.log('La persona es candidata al credito online para elearning');
}else{
    console.log('Por favor intente en otra oportunidad.');
}

console.log();

if(edad >= 18){
    if(salario >= 800){
        // Se cumplen todas las condiciones
      }else{
       // No se cumple el requisito del salario
      }
    } else {
        // No se cumple el requisito de la edad
    }
