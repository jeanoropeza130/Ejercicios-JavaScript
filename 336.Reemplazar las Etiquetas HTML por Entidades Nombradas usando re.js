//Reemplazar las Etiquetas HTML por Entidades Nombradas usando replace().

let html = '<p>Esto es texto en un <span>pàrrafo</span>.</p>';
console.log(html);


html = html.replace(/</g, '&lt;');
html = html.replace(/>/g, '&lt;');

console.log(html);
