//1.1 Usa querySelector para mostrar por consola 
//el botón con la clase .showme

const button = document.querySelector(".showme")
console.log(button)

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pillado = document.querySelector("#pillado")
console.log(pillado)

//1.3 Usa querySelector para mostrar por consola todos los p
const p = document.querySelector("p")
console.log(p)

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const allPokemon = document.querySelectorAll(".pokemon")
console.log(allPokemon)

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".

const testFunction = document.querySelectorAll("span[data-function='testMe']")
console.log(testFunction)

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".
const testFunction2 = document.querySelectorAll("span[data-function='testMe']")
console.log(testFunction[2])


