//Usar un Proxy para la Validación de Valores de Propiedades de un Objeto


// Exercise:

let validador = {
    set: function(objeto, propiedad, valor){
        if(propiedad === 'edad'){
            if(!Number.isInteger(valor)){
                throw new TypeError ('La edad no es un valor numérico.');
            }
            if (valor > 130 ){
                throw new RangeError ('La edad no puede ser mayor a 130.');
            }
        }

        objeto[propiedad] = valor;

        return true;
    }
};

let persona = new Proxy ({}, validador);
persona.nombre = 'Daniela';
persona.apellido = 'Gonzalez';

console.log(persona);

//Genera excepción TypeError: 
//persona.edad = 'abc';

//Genera excepcion RangeError:
//persona.edad = 150;

persona.edad = 30;
console.log(persona);