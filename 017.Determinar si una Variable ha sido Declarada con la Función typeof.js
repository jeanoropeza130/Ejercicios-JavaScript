//Determinar si una Variable ha sido Declarada con la Función typeof

let a;
let b=11;

console.log(typeof a);
console.log(typeof b);

// if (a===undefined)

if (typeof a === 'undefined') {
    console.log('La variable `a` no tiene un valor asignado');
}else{
    console.log('La variable `a` tiene un valor asignado');
}

console.log();

if (typeof b === 'undefined') {
    console.log('La variable `b` no tiene un valor asignado');
}else{
    console.log('La variable `b` tiene un valor asignado');
}