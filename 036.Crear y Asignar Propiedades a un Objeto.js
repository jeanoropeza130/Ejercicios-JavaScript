//Crear y Asignar Propiedades a un Objeto

//Primera forma:
let computador = {};
computador.procesador = 'Intel Core i7';
computador.ram = '32 GB';
computador.marca = 'MSi';
computador.board = 'Asus';

console.log(computador.procesador);

computador.procesador = 'Intel Core i7 Octava Generacion';

console.log(computador.procesador);

// Segunda forma:

computador = {procesador: 'Intel Core i7 Octava Generacion', ram: '32 GB', marca: 'MSi', board: 'Asus', 'sistema operativo': 'Windows 10'};

console.log(computador.procesador);

computador.procesador = 'Intel Core i7 Novena Generacion';

console.log(computador.procesador);

computador['tarjeta-grafica'] = 'GTX 1050';
console.log(computador['tarjeta-grafica']);