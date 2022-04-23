//Definir un Iterador Personalizado para una Clase de Colección

let tamagnio = Symbol('Tamaño');

class Coleccion{
    constructor(){
        this[tamagnio] = 0;
    }

    agregar(elemento){
        this[this[tamagnio]] = elemento;
        ++this[tamagnio];
    }

    *[Symbol.iterator](){
        let i = 0;

        while(this[i] !== undefined){
            yield this[i];
            ++i;
        }
    }

    static TamagnioActual(instancia){
        return instancia[tamagnio];
    }
}

let numeros = new Coleccion();

numeros.agregar(2);
numeros.agregar(3);
numeros.agregar(5);
numeros.agregar(7);
numeros.agregar(11);

for (const numero of numeros){
    console.log(numero);
}


