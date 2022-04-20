//Iterar Cada uno de los Índices de un Arreglo o Propiedades de un Objeto


// Solution:

let lenguajes = ['JS', 'PHP', 'Python', 'C++', 'Java'];

for(i in lenguajes){
    console.log('Indice:',i,'- Valor:',lenguajes[i]);
}

console.log();

// Objeto:

let edward = {nombre: 'Edward', apellido: 'Ortiz', edad: '23'};

for (p in edward){
    console.log('Propiedad:',p,'- Valor:',edward[p]);
}