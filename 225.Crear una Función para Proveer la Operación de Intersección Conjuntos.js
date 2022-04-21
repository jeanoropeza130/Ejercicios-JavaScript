//Crear una Función para Proveer la Operación de Intersección entre dos Conjuntos

Set.prototype.intersection = function(otroConjunto) {
    let conjuntoInterseccion = new Set();

    for (const e of otroConjunto) {
        if(this.has(e)) {
            conjuntoInterseccion.add(e);
        }
    }

    return conjuntoInterseccion;
}

let A = new Set([1, 2, 3, 4, 5, 6]);
let B = new Set([5, 6, 7, 8, 9, 10]);

let resultado = A.intersection(B);

console.log(resultado);

resultado = B.intersection(A);
console.log(resultado);

console.log();

let C = new Set([0, 11, 13]);

resultado = A.intersection(C);
console.log(resultado);
