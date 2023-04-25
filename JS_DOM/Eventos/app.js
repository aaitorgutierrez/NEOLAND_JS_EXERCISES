// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const button = document.querySelector("#btnToClick")
button.addEventListener("click", ()=> {
    console.log("CR7 el mejor")
})
// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const centrar = document.querySelector(".focus")
centrar.addEventListener("focus", (event)=>{
    console.log(event.target.value)
})

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input = document.querySelector(".value")
input.addEventListener("input", (ev) => {
    console.log(ev.target.value)
})
