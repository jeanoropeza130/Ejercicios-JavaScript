//Crear y Ejecutar una Función Anónima

let sumar = function(a, b) {
    let suma = a + b;
    return suma;
};

console.log(typeof sumar);
console.log(sumar instanceof Function);
console.log(sumar(2, 3));

console.log();

//IIFE => Immediately Invoked Function Expression

(function() {
    console.log('//IIFE => Immediately Invoked Function Expression');

})();