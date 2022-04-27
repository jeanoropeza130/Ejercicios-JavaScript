// Encontrar y Resaltar Todas las Ocurrencias de un Patrón en una Cadena

let frase = `Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código.

se utiliza para desarrollar aplicaciones de todo tipo, ejemplos: Instagram, Netflix, Panda 3D, entre otros.2​ Se trata de un lenguaje de programación multiparadigma, ya que soporta parcialmente la orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma.

Administrado por Python Software Foundation, posee una licencia de código abierto, denominada Python Software Foundation License.3​ Python se clasifica constantemente como uno de los lenguajes de programación más populares. `

let patron = /\bm\w*a\b/g;
let resultado = '';
let resultadoBusqueda;

while((resultadoBusqueda = patron.exec(frase)) != null){
    resultado += `En ${resultadoBusqueda.index} se encontrò ${resultadoBusqueda[0]}\n`;
}

console.log(resultado);