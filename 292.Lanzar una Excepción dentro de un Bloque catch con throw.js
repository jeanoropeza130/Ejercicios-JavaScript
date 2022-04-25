//Lanzar una Excepción dentro de un Bloque catch con throw

function funcion(){
    try{
        return 5 / a;
    } catch(error){
    throw(error);
    }

}

try{
funcion();
} catch(error){
    console.log(Error);

}

//funcion(); 


console.log("...");