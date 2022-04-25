// Asociar un Evento Click a un Elemento button con addEventListener

(()=>{
   let btnCambiarColorFondo = document.getElementById("btnCambiarColorFondo");

   btnCambiarColorFondo.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "lightblue";

   }, false);
})();
