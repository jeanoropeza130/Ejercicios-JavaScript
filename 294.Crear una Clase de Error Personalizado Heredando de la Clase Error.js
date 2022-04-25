//Crear una Clase de Error Personalizado Heredando de la Clase Error

class DivisionEntreCeroError extends Error{
    constructor(mensaje){
        super(mensaje);
        
    }
}

function dividir(a, b) {
    try{
        if (b !=0){
            return a/b;
        }

        throw new DivisionEntreCeroError('La divisiòn entre cero no es posible');
    } catch(err){
        throw(err);
    }
}

try{
dividir(5, 0);
} catch(error){
    console.log(error.message);
}