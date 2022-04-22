//Crear una Función con un Constructor, Declaración, o Expresión

let funcionConstructor = new Function('a', 'b', 'return a + b');

console.log(funcionConstructor(2, 3));

console.log();

//Declaración

function sumar(a,b){ //Funciones nombradas
    return a+b;
}

console.log(sumar(2,3));

console.log();

//Expresion

let sumarExpresion = function(a,b){ //Funciones anonimas
    return a+b;
};

console.log(sumarExpresion(2,3));