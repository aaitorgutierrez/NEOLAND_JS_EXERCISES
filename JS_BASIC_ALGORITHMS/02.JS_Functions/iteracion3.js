//**Iteración #3: Calcular la suma**

//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//Implemente la función denominada sumNumbers que toma un array de números como argumento 
//y devuelve la suma de todos los números de la matriz. 

//Puedes usar este array para probar tu función:
const numbers = [1, 2, 3, 5, 45, 37, 58];

const summAll = ((param) => {
    let acc = 0
    for (suma in param) {
        if (typeof param[suma] === "number") acc += param[suma]
    }
    return acc
}) 
const result = summAll(numbers);
console.log(result);

//for off y for each

const numbers2 = [1, 2, 3, 5, 45, 37, 58];
const summAll2 = ((param) => {
    let acc = 0
    for (suma in param) {
        if (typeof suma === "number") acc += suma
    }
    return acc
}) 
const result2 = summAll(numbers2);
console.log(result2);

