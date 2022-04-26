//Realizar una Solicitud Tipo GET usando la API Fetch

let url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});