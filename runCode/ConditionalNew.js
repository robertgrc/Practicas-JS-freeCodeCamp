console.log(77);

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

foo(0);
console.log(foo(0));

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
bar(0);
console.log(bar(0));

//*Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

//* chaining If Else statements
//   if (condition1) {
//     statement1
//   } else if (condition2) {
//     statement2
//   } else if (condition3) {
//     statement3
//   . . .
//   } else {
//     statementN
//   }
//*Write chained if/else if statements to fulfill the following conditions:

// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }
  // Only change code above this line
}

testSize(7);
console.log(testSize(25));

//--------------------------------------------

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes < 2) {
    return "Hole-in-one!";
  } else if (par == par && strokes <= par - 2) {
    return "Eagle";
  } else if (par == par && strokes <= par - 1) {
    return "Birdie";
  } else if (par == par && strokes === par) {
    return "Par";
  } else if (par == par && strokes === par + 1) {
    return "Bogey";
  } else if (par == par && strokes === par + 2) {
    return "Double Bogey";
  } else if (par == par && strokes >= par + 3) {
    return "Go Home!";
  }

  // Only change code above this line
}

golfScore(5, 4);
console.log(golfScore(5, 4));
console.log(golfScore(2, 3));
