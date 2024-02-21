
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


//Parte 1

//1. Decalro el lugar al que voy a añadir todo lo que creo.


//2. Creo el bucle


for (i=0; i < books.length ; i++){
  let parent = document.createElement("div");

  const location = document.getElementById("contenedor")
  parent.createElement("<article>")
  parent.createElement("<img>")
 parent.createAttribute("src").value = books[i].imageLink

}

document.getElementById("conenedor") = parent;
*/

//Parte 2

let card = "<div>"

for (j=0; j < books.length ; j++){

  card += `<article>
            <img src="${books[j].imageLink}" class="foto"></img>
            <div id="info">
            <p><strong>Title:</strong>${books[j].title}</p>
            <p><strong>Author:</strong> ${books[j].author}</p>
            <p><strong>Country:</strong> ${books[j].country}</p>
            <p><strong>Language:</strong> ${books[j].language}</p>
            <p><strong>Year:</strong> ${books[j].year}</p>
            <p><strong>Pages:</strong> ${books[j].pages}</p>
            <a href="${books[j].link}">Más info aquí</a>
            </div>
            </article>
            `
           
           
}
    
card += `</div>`; 
document.getElementById("container").innerHTML = card; 