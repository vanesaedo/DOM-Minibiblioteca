/*Ejercicio con arrays, objetos, manejo del DOM

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
*/
const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/cara_geometrica.png",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "images/cara_romero_brito.png",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "images/explosion_color.png",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "images/mancha_roja.png",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "images/miro_impresionista.png",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
    
  }]

  //Templates
  //use the object properties as variables



let card = "<div>"

for (i=0; i < books.length ; i++){

card += `<article>
            <img src="${books[i].imageLink}" class="foto"></img>
            <p><strong>Author:</strong>${books[i].author}</p>
            <p><strong>Country:</strong>${books[i].country}</p>
            <p><strong>Language:</strong>${books[i].language}</p>
            <p><strong>Link:</strong>${books[i].link}</p>
            <p><strong>Pages:</strong>${books[i].pages}</p>
            <p><strong>Title:</strong>${books[i].title}</p>
            <p><strong>Year:</strong>${books[i].year}</p>
            </article>`
    }
    card += `</div>`; 
    document.getElementById("container").innerHTML = card; 
    //document.body.innerHTML=imageLink;      


  
  //EJEMPLO:

  const cardTo = document.getElementById("contenedor");
  const imageTo = document.getElementById()

    card_.createElement('img');
    //Primero creo el atributo porque todas las img han de llevarlo
    document.createAttributeAttribute('src',`${books[i].imageLink}`)
    document.getElementsByTagName('img')
    
    (`<img class="foto" src="${books[0].imageLink}"></img>`)
  
  document.

    card_.src = imageLink[i];
    card_.src = imageLink[i];

  child.appendChild(text); 
  parent.appendChild(child);


  let links = document.getElementsByTagName("a");

for(let i = 0; i < links.length; i++){
    console.log(links[i].innerHTML); 
    console.log(links[i].pathname); 
    console.log(links[i].href);  
}caches,
  document.getElementById("mensaje").style.color = "blue";
  const autor = 
  - innerHTML
  - appendChild()
  - createElement()
  - createAttribute()
  - createTextNode()