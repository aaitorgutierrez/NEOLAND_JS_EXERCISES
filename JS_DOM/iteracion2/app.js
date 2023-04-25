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
    for (nuevo of h2insert) {
    nuevo.innerText = "Wubba Lubba dub dub"; 
    }
}
frase();

//2.6
