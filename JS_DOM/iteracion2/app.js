// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const divisor = document.createElement("div")
// 2.2 Inserta dinamicamente en un html 
// un div que contenga una p con javascript.

const div2 = document.createElement("div")
const p = document.createElement("p")
p.innerText = "esto es una p dentro de un div"
div2.appendChild(p)
document.body.appendChild(div2)

// 2.3 Inserta dinamicamente en un html un div que 
// contenga 6 p utilizando un loop con javascript.

const div3 = document.createElement("div")
for (let seisP = 0; seisP < 6; seisP++) {
    const p2 = document.createElement("p")
    p2.innerText = "esto es un bucle de P"
    div3.appendChild(p2)
}
document.body.appendChild(div3)

// 2.4 Inserta dinamicamente con javascript en un html
// una p con el texto 'Soy dinámico!'.

    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerText = "Soy dinámico!";
    document.body.appendChild(nuevoParrafo);

// 2.5 Inserta en todas las clases .fn-insert-here , el texto 'Wubba Lubba dub dub' .

const frase = () => {
    const rick = "Wubba Lubba dub dub"; 
    const h2insert = document.querySelectorAll(".fn-insert-here"); 
    for (nuevos of h2insert) {
    nuevos.innerText = rick; 
    }
}
frase();

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const newLista = () => {
    const nuevoUl = document.createElement("ul")
  apps.forEach(app => {
    const nuevoLi = document.createElement("li")
    nuevoLi.innerText= app
    nuevoUl.appendChild(nuevoLi)
  });
  document.body.appendChild(nuevoUl)
}
newLista()


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementos = document.querySelectorAll(".fn-remove-me")
elementos.forEach((element) => {
    element.remove()
})

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//Recuerda que no solo puedes insertar elementos con .appendChild.
// Obtén los elementos div con la clase 'fn-insert-here'

const afterDiv = document.querySelector("div");
afterDiv.insertAdjacentHTML("beforebegin", "voy en medio")

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const dentro = document.querySelectorAll(".fn-insert-here")
dentro.forEach((element)=> {
    const nuevaP = document.createElement("p")
    nuevaP.innerText = "Voy dentro!"
    element.appendChild(nuevaP)
})
