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

//*--------------------------------------------------------------------------------------------
//todo  Use Multiple Conditional (Ternary) Operators

//The above function can be re-written using multiple conditional operators:

function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}

//*Example
function findGreaterOrEqual(a, b) {
  return a === b
    ? "a and b are equal"
    : a > b
    ? "a is greater"
    : "b is greater";
}

//*--------------------------------------------------------------------------------------------
//todo In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.

function checkSign(num) {
  return num > 0
    ? "a es positivo"
    : num < 0
    ? "a es negativo"
    : "a es igual a 0";
}

checkSign(10);
console.log(checkSign(10));
console.log(checkSign(0));
console.log(checkSign(3));

//*--------------------------------------------------------------------------------------------
//todo  Use Recursion to Create a Countdown

//* hace un conteo de n numeros desde el 2 en este ejemplo

function countup(n) {
  if (n < 2) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); //*------[2,3,4,5]

//todo We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

//*conteo regresivo dado un numero n pasado a la funcion

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5)); //*expected [5, 4, 3, 2, 1]

//*--------------------------------------------------------------------------------------------
//todo  Use Recursion to Create range of numbers

//todoHemos definido una función llamada rangeOfNumbers con dos parámetros. La función debe devolver una matriz de enteros que comienza con un número representado por el parámetro startNum y termina con un número representado por el parámetro endNum. El número inicial siempre será menor o igual que el número final. Su función debe usar recursividad llamándose a sí misma y no usar bucles de ningún tipo. También debería funcionar para los casos en los que tanto startNum como endNum sean iguales.

//*conteo entre dos numeros startNum, endNum

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(7, 14));
