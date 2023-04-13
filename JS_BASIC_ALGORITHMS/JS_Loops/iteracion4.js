//Iteración #4: Probando For...in
//Usa un for...in para imprimir por consola los datos del alienígena.. 
//Puedes usar este objeto:
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for (const recorrerAlien in alien) {
    if (Object.hasOwnProperty.call(alien, recorrerAlien)) {
   const element = alien[recorrerAlien];
   console.log(element)
 
    }
}