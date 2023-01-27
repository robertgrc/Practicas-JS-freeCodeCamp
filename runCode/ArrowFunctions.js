console.log("ArrowFunctions");

//todo -------------------------------------------------------------------
//todo Use Arrow Functions to Write Concise Anonymous Functions

//*Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

// var magic = function() {
//     return new Date();
//   };

const magic = () => new Date();

//todo -----------------------------
//todo Write functions with parameters

const doubler = (item) => item * 2;
doubler(4);
//doubler(4) would return the value 8.

// It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
console.log(multiplier(4, 2));
//multiplier(4, 2) would return the value 8.
//*--------------------------
//*Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
//   };
//   console.log(myConcat([1, 2], [3, 4, 5]));

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//todo -----------------------------------------------------------------------------
//todo Set Default Parameters for Your Functions
//Establecer parámetros predeterminados para sus funciones Para ayudarnos a crear funciones más flexibles, ES6 introduce parámetros predeterminados para las funciones.

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

//The console will display the strings Hello John and Hello Anonymous.

//todo -----------------------------------------------------------------------------
//todo Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
// Only change code below this line
//*const increment = (number, value) => number + value;
// Only change code above this line

const increment = (number, value = 1) => number + value;

console.log(increment(4, 3)); //expected 4+3 = 7
console.log(increment(4)); //expected 4+1(defaultvalue)= 5
