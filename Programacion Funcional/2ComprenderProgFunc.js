// todo     Comprender la terminología de programación funcional
//* El equipo de FCC tuvo un cambio de humor y ahora quiere dos tipos de té: té verde y té negro. Dato general: Los cambios de humor de los clientes son bastante comunes.

//* Con esa información, tendremos que volver a visitar la getTeafunción del último desafío para manejar varias solicitudes de té. Podemos modificar getTea para aceptar una función como parámetro para poder cambiar el tipo de té que prepara. Esto lo hace getTea más flexible y le da al programador más control cuando cambian las solicitudes del cliente.

//* Pero primero, cubramos algo de terminología funcional:

//* Las devoluciones de llamada son las funciones que se deslizan o pasan a otra función para decidir la invocación de esa función. Es posible que los haya visto pasar a otros métodos, por ejemplo, en filter, la función de devolución de llamada le dice a JavaScript los criterios sobre cómo filtrar una matriz.

//* Las funciones que se pueden asignar a una variable, pasar a otra función o devolver desde otra función como cualquier otro valor normal, se denominan funciones de primera clase . En JavaScript, todas las funciones son funciones de primera clase.

//* Las funciones que toman una función como argumento, o devuelven una función como valor de retorno, se denominan funciones de orden superior .

//* Cuando las funciones se pasan o se devuelven desde otra función, las funciones que se pasaron o se devolvieron se pueden llamar lambda .

//todo Prepare 27 tazas de té verde y 13 tazas de té negro y guárdelas en tea4GreenTeamFCCy tea4BlackTeamFCCvariables, respectivamente. Tenga en cuenta que la getTeafunción se ha modificado, por lo que ahora toma una función como primer argumento.

//* Nota: Los datos (el número de tazas de té) se proporcionan como último argumento. Discutiremos esto más en lecciones posteriores.

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => "greenTea";

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => "blackTea";

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
