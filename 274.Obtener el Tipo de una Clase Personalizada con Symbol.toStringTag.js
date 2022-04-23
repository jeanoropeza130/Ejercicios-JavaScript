//Obtener el Tipo de una Clase Personalizada con Symbol.toStringTag


// Solution:

let tamagnio = Symbol('Tamaño');

class Coleccion{
    constructor(){
        this[tamagnio] = 0;
    }

    agregar(elemento){
        this[this[tamagnio]] = elemento;
        ++this[tamagnio];
    }

    get [Symbol.toStringTag](){
        return 'Coleccion';
    }

    static TamagnioActual(instancia){
        return instancia[tamagnio];
    }
}

let numeros = new Coleccion();
console.log(typeof numeros);

console.log(Object.prototype.toString.call(numeros));