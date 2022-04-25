//Definir Métodos Getters y Setters en un Clase

class Persona{
    constructor(nombre, apellido, email, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
       this._apellido = apellido; 
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
      this._edad = edad;
    }
}

let edwin = new Persona('Edwin', 'Garcia', 'edwin@mail.com' , '30');

console.log(edwin);
console.log(edwin.apellido);

console.log();

edwin.apellido = 'Perez';
console.log(edwin.apellido);