//Iteración #4: Métodos findArrayIndex
//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la
// posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.
//Sugerencia de función:
const cadenaStrings = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
function findArrayIndex(array, text) {
    let resultado = []
    array.forEach((element , index) => {
        if (text == element) {
            resultado.push({
                "text": text,
                "index": index,
            })
        }
        
    });
    return resultado
}
console.log(findArrayIndex(cadenaStrings, "Salamandra"))