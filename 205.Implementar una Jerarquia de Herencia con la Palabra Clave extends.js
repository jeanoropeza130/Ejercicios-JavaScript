//Implementar una Jerarquía de Herencia con la Palabra Clave extends

class Persona{
    constructor(nombre, apellido, identificacion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.identificacion = identificacion;
    }
}

class Estudiantes extends Persona{
    constructor(nombre, apellido, identificacion, carnet, carrera, semestre){
        super(nombre, paellido, identificacion);

        this.carnet = carnet;
        this.carrera = carrera;
        this.semestre = semestre;
    }
}

class Profesor extends Persona{
    constructor(nombre, apellido, identificacion, profesion, sueldo){
        super(nombre, apellido, identificacion);

        this.profesion = profesion;
        this.sueldo = sueldo;

    }
}


