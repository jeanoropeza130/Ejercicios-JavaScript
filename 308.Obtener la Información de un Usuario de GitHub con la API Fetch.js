//Obtener la Información de un Usuario de GitHub con la API Fetch

let url = 'https://api.github.com/Fhernd';

fetch(url)
.then((response) => response.json())
.then((data) => {
console.log(data);
}).catch((error) => {
    console.log(error);
})