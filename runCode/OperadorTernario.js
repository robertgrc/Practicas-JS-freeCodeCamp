//todo--------------------------------------------------------------------------
//todo Use the Conditional (Ternary) Operator

//*The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

function findGreater1(a, b) {
  if (a > b) {
    return "a is greater";
  } else {
    return "b is greater or equal";
  }
}

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

//*--------------------------------------------------------------------------------------------

//todo Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

console.log(checkEqual(1, 2));
console.log(checkEqual(7, 7));
