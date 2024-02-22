
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

/*
//-------------PARTE I PRE-2015----------------------------------

//let ejemplar = document.createElement("div");

for (let i = 0; i < books.length; i++){
//-----IMAGEN

//Creando las etiquetas img y el atributo vacío

//Creo el objeto de DOM img
let imag = document.createElement("img");

//Creo el objeto de DOM atributo src
let atrib = document.createAttribute("src");

//Pintando, al indicar dónde los voy a incluir

//Indico dónde voy a incluir estos objetos, y con ello se pintan. Sin esto no se verían, existirían pero en modo virtual.
const section = document.getElementsByTagName("section")[i];

//Creando el valor del atributo src

//Ahora que están pintados creo una variable con el valor para el atributo src
let atribValue = books[i].imageLink;


//Digo dónde (atrib) introducir el valor (.value) del atributo src (atribValue).
atrib.value = atribValue;

//Introduzco y con ello pinto el atributo src ya con su valor dentro de la etiqueta img.
imag.setAttributeNode(atrib);

//Introduzco y con ello pinto la la etiqueta imagen (imag) en el primer elemento section (const section)
section.appendChild(imag);

//----ANCHOR

//Creo el elemento de DOM etiqueta <a>
let anchor = document.createElement("a");

//Creo el elemento de DOM atributo href
let href = document.createAttribute("href");

//**No necesito volver a decir que lo introduzca en section, con la primera vez que he aludido a section es suficiente.
//Almaceno el valor que cojo del objeto en la variable hrefValue
let hrefValue = books[i].link;

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

//-----AUTOR

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
let dataAutor = document.createTextNode(books[i].title);
//Añado el texto al h5
pAutor.appendChild(dataAutor);
section.appendChild(pAutor); 

//-----COUNTRY

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
let dataCountry = document.createTextNode(books[i].country);
//Añado el texto al h5
pCountry.appendChild(dataCountry);
section.appendChild(pCountry); 

//-----LANGUAGE

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
let dataLan = document.createTextNode(books[i].language);
//Añado el texto al h5
pLan.appendChild(dataLan);
section.appendChild(pLan); 

//----PAGES

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
let dataPag = document.createTextNode(books[i].pages);
//Añado el texto al h5
pPag.appendChild(dataPag);
section.appendChild(pPag);


//-----YEAR

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
let dataYear = document.createTextNode(books[i].year);
//Añado el texto al h5
pYear.appendChild(dataYear);
section.appendChild(pYear); 

}

*/
//----PARTE II - Post 2015 con Templates ---------------------------


let card = "<div>"

for (j=0; j < books.length ; j++){

card += `<article>
            <img src="${books[j].imageLink}" class="foto"></img>
            <div>
            <p><strong>Author:</strong>${books[j].author}</p>
            <p><strong>Country:</strong>${books[j].country}</p>
            <p><strong>Language:</strong>${books[j].language}</p>
            <p><strong>Link:</strong>${books[j].link}</p>
            <p><strong>Pages:</strong>${books[j].pages}</p>
            <p><strong>Title:</strong>${books[j].title}</p>
            <p><strong>Year:</strong>${books[j].year}</p>
            </div>
            </article>`
    }
    card += `</div>`; 
    document.getElementById("container").innerHTML = card; 