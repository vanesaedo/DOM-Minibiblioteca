
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

/*
let card_ = "<div>"
let cont = document.getElementById("contenedor")
let im = document.createElement("img")
let at = document.createAttribute("src")
let val = books[0].imageLink
at.value = val

at.appendChild(im)
im.appendChild(cont)
card += "</div>"
*/
/*
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
/*

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
*/

//Imagen
//Creo el objeto de DOM img
let imag = document.createElement("img");

//Creo el objeto de DOM atributo src
let atrib = document.createAttribute("src");

//Indico dónde voy a incluir estos objetos, y con ello se pintan. Sin esto no se verían, existirían pero en modo virtual.
const section = document.getElementsByTagName("section")[0];

//Ahora que están pintados creo una variable con el valor para el atributo src
let atribValue = books[0].imageLink;

//Incluyo en el atributo src (atrib) el valor cogido, mediante la variable anterior, del objeto.
atrib.value = atribValue;

//Introduzco y con ello pinto el atributo src ya con su valor dentro de la etiqueta img.
imag.setAttributeNode(atrib);

//Introduzco y con ello pinto la la etiqueta imagen (imag) en el primer elemento section (const section)
section.appendChild(imag);

//Link

//Creo el elemento de DOM etiqueta <a>
let anchor = document.createElement("a");

//Creo el elemento de DOM atributo href
let href = document.createAttribute("href");

//No necesito aludir a section porque con la vez ha sido suficiente
//Almaceno el valor que cojo del objeto en la variable hrefValue
let hrefValue = books[0].link;

//Incorporo el valor del atributo al atributo (nombrevarObjetoDOM.value = variable) 
href.value = hrefValue;

//Añado el atributo href al anchor.
anchor.setAttributeNode(href);

//Creo un texto para el enlace donde haremos click
let textoLink = document.createTextNode("Más info aquì")
//Añado el texto del lilnk entre las etiquetas <a>.
anchor.appendChild(textoLink)

//Incluyo el enlace a la sección
section.appendChild(anchor);

//Titulo autor 

//Creo el elemento del DOM
let h5 = document.createElement("h5");
//Creo el texto que mostrará el h5
let titAutor = document.createTextNode("Autor: ");
//Añado el texto al h5
h5.appendChild(titAutor)
//Añado el h5 al section
section.appendChild(h5)

//Info de autor

//Creo el elemento del DOM
let pAutor = document.createElement("p");
//Almaceno el dato a incluir cogiéndolo del objeto (books[0].title)
let dataAutor = document.createTextNode(books[0].title);
//Añado el texto al h5
pAutor.appendChild(dataAutor);
section.appendChild(pAutor); 

//COUNTRY

//Titulo country

//Creo el elemento del DOM
let h5Country = document.createElement("h5");
//Creo el texto que mostrará el h5
let titCountry = document.createTextNode("Country: ");
//Añado el texto al h5
h5Country.appendChild(titCountry)
//Añado el h5 al section
section.appendChild(h5Country)

//Info de country

//Creo el elemento del DOM
let pCountry = document.createElement("p");
//Almaceno el dato a incluir cogiéndolo del objeto (books[0].title)
let dataCountry = document.createTextNode(books[0].country);
//Añado el texto al h5
pCountry.appendChild(dataCountry);
section.appendChild(pCountry); 

//LANGUAGE

//Titulo language 

//Creo el elemento del DOM
let h5Lan = document.createElement("h5");
//Creo el texto que mostrará el h5
let titLan = document.createTextNode("Language: ");
//Añado el texto al h5
h5Lan.appendChild(titLan)
//Añado el h5 al section
section.appendChild(h5Lan)

//Data Languages

//Creo el elemento del DOM
let pLan = document.createElement("p");
//Almaceno el dato a incluir cogiéndolo del objeto (books[0].title)
let dataLan = document.createTextNode(books[0].language);
//Añado el texto al h5
pLan.appendChild(dataLan);
section.appendChild(pLan); 

//PAGES

//Creo el elemento del DOM
let h5Pag = document.createElement("h5");
//Creo el texto que mostrará el h5
let titPag = document.createTextNode("Pages: ");
//Añado el texto al h5
h5Pag.appendChild(titPag)
//Añado el h5 al section
section.appendChild(h5Pag)

//Info de pages

//Creo el elemento del DOM
let pPag = document.createElement("p");
//Almaceno el dato a incluir cogiéndolo del objeto (books[0].title)
let dataPag = document.createTextNode(books[0].pages);
//Añado el texto al h5
pPag.appendChild(dataPag);
section.appendChild(pPag);


//YEAR

//Creo el elemento del DOM
let h5Year = document.createElement("h5");
//Creo el texto que mostrará el h5
let titYear= document.createTextNode("Year: ");
//Añado el texto al h5
h5Year.appendChild(titYear)
//Añado el h5 al section
section.appendChild(h5Year)

//Creo el elemento del DOM
let pYear = document.createElement("p");
//Almaceno el dato a incluir cogiéndolo del objeto (books[0].title)
let dataYear = document.createTextNode(books[0].year);
//Añado el texto al h5
pYear.appendChild(dataYear);
section.appendChild(pYear); 

