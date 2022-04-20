//Uso del Operador Lógico de Negación para Alternar el Valor de Verdad

// !

// !true := false; !false := true;

console.log(!true);
console.log(!false);
console.log(!1);
console.log(!0);
console.log(!!true);

console.log();

// (a && b) := !a || !b;

// !(a || b) := !a && !b; 

let a = true;
let b = false;

console.log(!(a && b));
console.log(!(!a || !b));
console.log(!a || !b);
console.log(!a && !b);