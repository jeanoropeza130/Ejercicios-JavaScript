//Crear una Función Anónima como Propiedad de un Objeto Literal

let radio = {marca: "Philips", modelo: "Huey", precio: "100",
 color: "Rojo", digital: true, encendido: false, 
 encender: function(){
    this.encendido = true;
 },
apagar: function(){
    this.encendido = false;
}};

console.log(radio);

radio.encender();
console.log(radio.encendido);

radio.apagar();
console.log(radio.encendido);