//Crear un Función Generadora en ECMAScript 6 (ES6)

function * generarCadenas(){
    yield "Hola";
    yield "Mundo";
    yield "!";
}

let objetoGenerador = generarCadenas();

console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());
console.log(objetoGenerador.next());