//Cambiar el Color de Fondo de un Documento HTML Después de 5 Seg

 function cambiarColorFondo(){
     setTimeout(()=>{
        document.body.style.backgroundColor = "red";
     }, 5000)
 }