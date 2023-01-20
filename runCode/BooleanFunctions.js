// You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

// Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
// But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}

//* Fix the function isLess to remove the if/else statements.

function isLess(a, b) {
  // Only change code below this line
  //* if (a < b) {
  // *  return true;
  //* } else {
  //*   return false;
  //* }

  return a < b;
  // Only change code above this line
}

isLess(10, 15);
console.log(isLess(10, 15)); //*---------retorna un true
console.log(isLess(15, 10)); //*---------retorna un false

//*--------------------------------------------------------------------------------------
//Example
//Cuando se llega a una declaración de devolución, la ejecución de la función actual se detiene y el control vuelve a la ubicación de llamada.

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye");
}
myFun();
console.log(myFun());

//*Modifique la función abTest para que si a o b son menores que 0, la función saldrá inmediatamente con un valor indefinido.

// Setup
function abTest(a, b) {
  // Only change code below this line

  if (a < 0 || b < 0) return;
  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
console.log(abTest(4, 4));

//*---------------------------------------------------------------------------------------------------
