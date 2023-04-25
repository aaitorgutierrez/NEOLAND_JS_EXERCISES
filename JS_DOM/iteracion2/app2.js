// 2.1 Inserta dinamicamente en un html un 
// div vacio con javascript.

const div = `<div>esto es un div</div>`

document.body.innerHTML = div
// 2.2 Inserta dinamicamente en un html 
// un div que contenga una p con javascript.

const div2 = `<div><p>Esto es una p</p></div>`

document.body.innerHTML += div2

// 2.3 Inserta dinamicamente en un html un div que 
// contenga 6 p utilizando un loop con javascript.

const pBucle = () => {
    for (let p = 0; p < 6; p++) {
        const element = document.createElement("p")
        element.innerText = "soy un bucle pp"
        document.body.appendChild(element);
    }
}
pBucle()


// 2.4 Inserta dinamicamente con javascript en un html
// una p con el texto 'Soy dinámico!'.
const insertarParrafo = () => {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerText = "Soy dinámico!";
    document.body.appendChild(nuevoParrafo);
}
insertarParrafo()

// 2.5 Inserta en todas las clases .fn-insert-here , el texto 'Wubba Lubba dub dub' .

const frase = () => {
    const rick = "Wubba Lubba dub dub"; 
    const h2insert = document.querySelectorAll(".fn-insert-here"); 
    for (nuevo of h2insert) {
    nuevo.innerText += "Wubba Lubba dub dub"; 
    }
}
frase();

const h2texto = document.querySelectorAll(".fn-insert-here");
const texto2 = "Wubba Lubba dub dub";

h2texto.forEach((element) => {
  element.innerText = texto2;
});

// 2.6 Basandote en el siguiente array crea una lista 
// ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];


// 2.7 Elimina todos los nodos que tengan la clase 
// .fn-remove-me

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// Recuerda que no solo puedes insertar elementos con .appendChild.

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con 
// la clase .fn-insert-here