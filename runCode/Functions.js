function reusableFunction() {
  console.log("Hi Word");
}
reusableFunction();

//*Pasar valores a funciones con argumentos
function testFun(param1, param2) {
  console.log(param1, param2);
}

testFun(7, 7);

//*Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
//*Call the function with two numbers as arguments.
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}
functionWithArgs(7, 7);

//*3Return a Value from a Function with Return
//We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.
//Example

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
console.log(answer);
//* answer has the value 8.
// plusThree takes an argument for num and returns a value equal to num + 3.

//*Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
function timesFive(num) {
  return num * 5;
}
const answer2 = timesFive(5);
console.log(answer2);

//*4Global Scope and Functions
// Usando let o const, declare una variable global llamada myGlobal fuera de cualquier función. Inicializarlo con un valor de 10.
// Dentro de la función fun1, asigne 5 a oopsGlobal sin usar las palabras clave var, let o const.

// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  const oopsGlobal = 5;
}
const oopsGlobal = 5;
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//*5 Local Scope and functions -alcance local y funciones
//*La llamada a la función myTest() mostrará la cadena foo en la consola. La línea console.log(loc) (fuera de la función myTest) generará un error, ya que loc no está definido fuera de la función.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
// console.log(loc);
//loc is not defined lo comentaremos

//*
function myLocalScope() {
  // Only change code below this line
  const myVar = "variable";
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log("outside myLocalScope", myVar);

//*6 Global vs. Local Scope in Functions

//In this example:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

console.log(someVar);

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}
console.log(outerWear);

myOutfit();

//*7Understanding Undefined Value returned from a Function-Comprender el valor indefinido devuelto por una función

//Example

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

// addSum is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined.

//*8 Assignment with a Returned Value
//*Call the processArg function with an argument of 7 and assign its return value to the variable processed.
//*Llame a la función Processarg con un argumento de 7 y asigne su valor de retorno a la variable procesada.
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed);
//*en consola se espera un resultado igual = 2
// Only change code below this line
