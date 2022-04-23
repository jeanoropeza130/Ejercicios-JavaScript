//Crear Identificadores con Symbol() para cada Objeto Definido

let jean = {id: Symbol(), nombre: 'Jean', apellido: 'Oropeza', edad:37};
let daniela = {id: Symbol(), nombre: 'Daniela', apellido: 'Ordoñez', edad:27};

console.log(jean);
console.log(daniela);

console.log(jean.id == daniela.id);

