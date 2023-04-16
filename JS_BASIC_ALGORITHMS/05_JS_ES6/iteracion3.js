//ITERACION 3 Spread Operator

// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointList = [32, 54, 21, 64, 75, 43]

let newPointlist = [...pointList]
console.log(newPointlist)

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

let toyCopy = {...toy}
console.log(toy)


// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

let concatList = [...pointsList1, ...pointsLis2]
console.log(concatList)


// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

let newObj = {...toy1, ...toyUpdate}
console.log(newObj)

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];


let newColor1 = [...colors.splice(0, 2)]
let newColor2 = [...colors.splice(1, 3)]
let finalColour = [newColor1 + "," + newColor2]
console.log(finalColour)