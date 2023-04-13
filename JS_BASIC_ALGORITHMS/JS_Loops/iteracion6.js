//**Iteración #6: Mixed For...of e includes**

//Usa un bucle **for...of** para recorrer todos los juguetes y 
//elimina los que incluyan la palabra gato. Recuerda que puedes usar la función 
//***.includes()*** para comprobarlo.Puedes usar este array:
const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for (const toy of toys) {
    if (!toy.name.includes("gato")) {
        popularToys.push(toy)

    }
}
console.log(popularToys)