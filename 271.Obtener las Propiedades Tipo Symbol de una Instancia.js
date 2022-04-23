//Obtener las Propiedades Tipo Symbol de una Instancia

let tamagnio = Symbol('Tamaño');

class Coleccion{
    constructor(){
        this[tamagnio] = 0;
    }

    agregar(elemento){
        this[this[tamagnio]] = elemento;
        ++this[tamagnio];
    }

    static TamagnioActual(instancia){
        return instancia[tamagnio];
    }
}

let numeros = new Coleccion();

console.log(Object.getOwnPropertySymbols(numeros));
console.log(Object.getOwnPropertyNames(numeros));

