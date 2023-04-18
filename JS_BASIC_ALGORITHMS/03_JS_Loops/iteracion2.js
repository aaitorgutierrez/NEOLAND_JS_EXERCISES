//**Iteración #2: Condicionales avanzados**
//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados 
//y añade la propiedad ***isApproved*** a true o false en consecuencia. 
//Una vez lo tengas compruébalo con un ***console.lo***
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
const trimestreA = (aprobado) => {
    aprobado.forEach((element) => {
      if (
        (element["T1"] === true && element["T2"] === true) ||
        (element["T1"] === true && element["T3"] === true) ||
        (element["T2"] === true && element["T3"] === true)
      ) {
        element.approved = true;
      } else {
        element.approved = false;
      }
      console.log(element);
    });
  };
trimestreA(alumns)
