//**Iteración #4: Calcular el promedio**
//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
const average = (array) => {
   let promedio = 0
   array.forEach(number => {
    promedio += number
   });
let resultado = promedio / array.length
return resultado
}
console.log(average(numbers))