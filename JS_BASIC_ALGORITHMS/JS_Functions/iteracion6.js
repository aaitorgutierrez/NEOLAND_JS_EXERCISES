//Iteración #6: Valores únicos
//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
//en caso que existan los elimina para retornar un array sin los elementos duplicados. 
//Puedes usar este array para probar tu función:
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
    const removeDuplicates = (array) => { 
        let newArray = []
        array.forEach(comida => {
            !newArray.includes(comida) && newArray.push(comida)
        
        }) 
        return newArray   
  }

  console.log(removeDuplicates(duplicates))
//1º !newArray.includes(comida): Se verifica si la comida (comida) no está incluida en el arreglo newArray. 
//El símbolo de exclamación (!) antes de newArray.includes(comida) significa "no", 
//por lo que esta parte del código verifica si la comida no está en newArray.

//2º &&: Es un operador lógico "y" que se utiliza para combinar dos condiciones. 
//En este caso, se utiliza para asegurarse de que ambas condiciones sean verdaderas.

//3º newArray.push(comida): Si la comida no está incluida en newArray, 
//se agrega al arreglo newArray utilizando el método push.
//Esto asegura que solo se agreguen comidas que no estén repetidas en newArray.