//Convertir los Argumentos de una Función en un Objeto Arreglo

//arguments

function fn(){
    console.log(typeof arguments);
    console.log(arguments instanceof Array);
    console.log(arguments.length);

    console.log();

    let arregloArguments = [].slice.call(arguments);
    console.log(typeof arregloArguments);
    console.log(arregloArguments instanceof Array);
    console.log(arregloArguments.length);
    console.log(arregloArguments.indexOf(2));
    console.log(arregloArguments.indexOf(7));
    console.log('---------------------------------');

}

fn();
console.log();
fn(2, 3, 6);