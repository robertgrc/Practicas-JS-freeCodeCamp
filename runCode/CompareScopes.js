console.log("CompareScopes");

//todo Arregle el código para que lo declarado en la declaración if sea una variable separada de lo que declaré en la primera línea de la función. Asegúrese de no usar la palabra clave var en ninguna parte de su código. Este ejercicio está diseñado para ilustrar la diferencia entre cómo las palabras clave var y let asignan alcance a la variable declarada. Al programar una función similar a la utilizada en este ejercicio, a menudo es mejor usar diferentes nombres de variables para evitar confusiones.

//var y let

function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

//todo modificar arreglo definido const

//*An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  console.log(s); //*-----------[2, 5, 7]
}
editInPlace();

//todo -------------------------------------------------------------------
//todo Prevenir la mutación de objetos
//function Object.freeze to prevent data mutation.
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);
//*----- con freeze se previene que se hagan mutaciones, ni se puede anadir tampoco modificar

//todo -------------------------------------------------------------------
//todo In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS); //--------------frizado

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
