# DOM-Minibiblioteca
Ejercicio de clase Minibiblioteca

Ejercicio - Minibiblioteca JS - DOM
Alejandro Reyes
•
12:37
100 puntos
Fecha de entrega: 22 feb, 9:00
Ejercicio con arrays, objetos, manejo del DOM

Dado el siguiente array de objetos, pintar en el DOM tarjetas con los detalles de los siguientes libros. 
- Maquetación HTML + CSS. Respetar semántica HTML5
- Mobile first. Usar Flexbox para las tarjetas y media queries. 
- Subir a GitHub el proyecto
- Podéis implementar las dos fases en el mismo proyecto

Para generar las tarjetas (Hay que hacerlo de las 2 formas):
Fase 1
Utilizar métodos de manejo del DOM
    - innerHTML
    - appendChild()
    - createElement()
    - createAttribute()
    - createTextNode()
Fase 2
Utilizar template string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
https://www.w3schools.com/js/js_string_templates.asp

Ejemplo template string: 
https://wesbos.com/template-strings-html
const person = {
name: 'Wes',
job: 'Web Developer',
city: 'Hamilton',
bio: 'Wes is a really cool guy that loves to teach web development!'
}
// And then create our markup:
const markup = `
<div class="person">
<h2>
${person.name}
</h2>
<p class="location">${person.city}</p>
<p class="bio">${person.bio}</p>
</div>
`;


Enviar URL del repositorio con vuestra solución.

const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "images/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "images/the-divine-comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "images/the-epic-of-gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "images/the-book-of-job.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
    
  }]
