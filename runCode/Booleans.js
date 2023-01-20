//*Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

//*operador equals
//*     1   ==  1  // true
// *    1   ==  2  // false
//  *   1   == '1' // true
//  *   "3" ==  3  // true

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(equalityTest(11));

//*Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//*operador estricto ===
//   Examples

//          3 ===  3  // true
//          3 === '3' // false

//*Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//*typeof 3
//Examples

// 3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed.

// Note: In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:
// typeof '3'
// typeof 3 returns the string number, and typeof '3' returns the string string.

//*5 Comparison with the Inequality Operator
// he inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

// Examples

// 1 !=  2    // true
// 1 != "1"   // false
// 1 != '1'   // false
// 1 != true  // false
// 0 != false // false

//*Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.
//*Agregue el operador de desigualdad != En la instrucción if para que la función devuelva la cadena no igual cuando Val no es equivalente a 99.

function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal to 99";
  }
  return "Equal";
}

testNotEqual(10);
console.log(testNotEqual(10));

//*operador estricto
// Examples

// 3 !==  3  // false
// 3 !== '3' // true
// 4 !==  3  // true
//* Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal to 17";
  }
  return "Equal";
}

testStrictNotEqual(10);
console.log(testStrictNotEqual(10));

//*Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
console.log(testGreaterThan(10));

//*Examples

// 6   >=  6  // true
// 7   >= '3' // true
// 2   >=  3  // false
// '7' >=  9  // false
//*Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
console.log(testGreaterOrEqual(10));

//* Add the less than operator to the indicated lines so that the return statements make sense.
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
console.log(testLessThan(10));

//*Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

//The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
//will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

function testLogicalAnd(val) {
  // Only change code below this line
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "no";
}

testLogicalAnd(10);

//*
//he pattern below should look familiar from prior waypoints:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
//will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

//*Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
