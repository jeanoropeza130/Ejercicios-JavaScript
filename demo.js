console.log('Javascript es Genial');

function saludar(nombre) {
    console.log('Hola ' + nombre);
}

saludar ('Juan');

function saludo(nombre){
    console.log(`Hola ${nombre}`);
}

saludo ('Jean');

setTimeout(() => {
    console.log('Esto se mostrara despues de 10 segundos');
}, 10000);

console.log('fin');