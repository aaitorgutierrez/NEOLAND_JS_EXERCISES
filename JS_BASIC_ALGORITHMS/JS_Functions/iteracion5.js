//Iteración #5: Calcular promedio de strings
//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
//y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
const averageWord = (array) => {
    let acc = 0
    let accString = 0
    for (i = 0; i < array.length ; i++) {
        if (typeof array[i] == "number") {
            acc += array[i] 
        }else {accString += array[i].length
        }
    } 
    return acc + accString
    
}

const totalMixedElements = averageWord(mixedElements)
console.log(totalMixedElements)