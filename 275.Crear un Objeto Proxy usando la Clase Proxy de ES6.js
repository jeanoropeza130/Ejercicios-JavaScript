//Crear un Objeto Proxy usando la Clase Proxy de ES6

let handler = {
    get: function(target, name){
        return name in target ? target[name] : 'No existe la propiedad: ' + name;
  }
};

let persona = {nombre: 'Juan', apellido: 'Perez', edad: 30};

let proxy = new Proxy(persona, handler);

console.log(proxy.nombre);
console.log(proxy.apellido);
console.log(proxy.edad);
console.log(proxy.email);