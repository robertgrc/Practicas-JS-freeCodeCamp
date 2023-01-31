console.log("typeof");

console.log(typeof ""); //--string
console.log(typeof 0); //--number
console.log(typeof []); //--object
console.log(typeof {}); //--object

//*In order, the console will display the strings string, number, object, and object.

//*JavaScript recognizes seven primitive (immutable) data types: Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020), and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.

//todo Add two console.log() statements to check the typeof each of the two variables seven and three in the code.

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

//todo ---------------------------------------------------------------------------
//todo      Detectar nombres de variables y funciones mal escritos

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//todo ---------------------------------------------------------------------------
//todo

let myArray = [1, 2, 3, 4, 5];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//todo ---------------------------------------------------------------------------
//todo  Catch Mixed Usage of Single and Double Quotes
const grouchoContraction =
  "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString =
  "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
//const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
console.log(grouchoContraction);
console.log(quoteInString);

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

//todo ---------------------------------------------------------------------------
//todo Catch Use of Assignment Operator Instead of Equality Operator

let x = 7;
let y = 9;
let result = "to come";

if (x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

//todo ---------------------------------------------------------------------------
//todo Catch Missing Open and Closing Parenthesis After a Function Call
//se puede olvidar de colocar los parentesis para llamar la funcion es un error comun

function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();

//todo ---------------------------------------------------------------------------
//todo Catch Off By One Errors When Using Indexing

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}

//The first example here loops one too many times, and the second loops one too few times (missing the first index, 0). The third example is correct.

//todo Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
    // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();
