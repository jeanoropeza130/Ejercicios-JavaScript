//Uso del Método toLocaleDateString de la Clase Date

let event = new Date (Date.UTC(2012, 11, 20, 3, 0, 0));

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(event.toLocaleDateString('es-ES', options));
// Sabado, 20 de diciembre de 2012

console.log(event.toLocaleDateString('de-EG', options));
// Mittwoch, 19. Dezember 2012

console.log(event.toLocaleDateString('ar-EG', options));
// الأربعاء، ١٩ ديسمبر ٢٠١٢

console.log(event.toLocaleDateString('ko-KR', options));
// 2012년 12월 19일 수요일