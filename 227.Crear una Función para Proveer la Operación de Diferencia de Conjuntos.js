//Crear una Función para Proveer la Operación de Diferencia de Conjuntos

Set.prototype.diferencia = function(B) {
    let conuntoDiferencia = new Set();
    
    for (const e of this) {
        if(!B.has(e)){
            conuntoDiferencia.add(e);
        }
    }
    return conuntoDiferencia;
}

let A = new Set([1,2,3,4,5]);

let B = new Set([4,5,6,7,8]);

let resultado = A.diferencia(B);

console.log(resultado);

console.log();

resultado = B.diferencia(A);
console.log(resultado);
