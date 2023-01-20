// this is an in-line comment

/*This is a 
multiline comment*/

//asignacion de valores a variables
// Setup
var a;
a = 7;
var b;

// Only change code below this line

// Setup
var a;
a = 7;
var b;
var b = a;

// Only change code below this line

//Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.
let myFirstName = "robert";
let myLastName = "rodriguez";

//Inicialice las tres variables a, b y c con 5, 10 y "Soy un" respectivamente para que no queden indefinidas.

// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//Escriba nombres de variables en JavaScript en camelCase. En camelCase, los nombres de variables de varias palabras tienen la primera palabra en minúsculas y la primera letra de cada palabra subsiguiente está en mayúscula.
// Variable declarations
// var StUdLyCapVaR;
// var properCamelCase;
// var TitleCaseOver;

// // Variable assignments
// STUDLYCAPVAR = 10;
// PRoperCAmelCAse = "A String";
// tITLEcASEoVER = 9000;
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;

//cuando se declara con var se puede volver a declarar la misma variable
//cuando esta declarado con let no se puede declarar la misma variable dos veces
var catName = "Oliver";
var catSound = "Meow!";
// Cambie el código para que todas las variables se declaren usando let o const. Use let cuando desee que la variable cambie y const cuando desee que la variable permanezca constante. Además, cambie el nombre de las variables declaradas con const para ajustarse a las prácticas comunes. No cambie las cadenas asignadas a las variables

var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//The entire line becomes i++;, eliminating the need for the equal sign.
let myVar = 87;

// Only change code below this line
++myVar;

//let myVar = 11;

// Only change code below this line
myVar = myVar - 1;
--myVar;

const ourDecimal = 5.7;

// Only change code below this line
let myDecimal = 5.7;

//Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
const remainder = 11 % 3;

// Compound Assignment With Augmented Addition
// In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:
// myVar = myVar + 5;
// to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.
// One such operator is the += operator.
// let myVar = 1;
// myVar += 5;
// console.log(myVar);
// 6 would be displayed in the console.
// Convert the assignments for a, b, and c to use the += operator.
let a = 3;
let b = 17;
let c = 12;

// // Only change code below this line
// a = a + 12;
// b = 9 + b;
// c = c + 7;
a += 12;
b += 9;
c += 7;
a -= 6;
b -= 15;
c -= 1;
// let a = 5;
// let b = 12;
// let c = 4.6;

// // Only change code below this line
// a = a * 5;
// b = 3 * b;
// c = c * 10;
a *= 5;
b *= 3;
c *= 10;

// let a = 48;
// let b = 108;
// let c = 33;

// // Only change code below this line
// a = a / 12;
// b = b / 4;
// c = c / 11;
a /= 12;
b /= 4;
c /= 11;

//const myStr = "I am a \"\double quoted\"\ string inside \"\double quotes\"\."; // Change this line
const myStr = '<a "href=http://www.example.com" "target=_blank">Link</a>';

// Assign the following three lines of text into the single variable myStr using escape sequences.

// FirstLine
//     \SecondLine
// ThirdLine
// You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

// Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.

const mySolucion = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.
const mysol = "This is the start." + " This is the end."; // Change this line

// Example:
// let ourStr = "I come first. ";
// ourStr += "I come second.";
// ourStr now has a value of the string I come first. I come second..
// ________________________________________
// Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.

let myString = "This is the first sentence. ";
myString += "This is the second sentence.";

//Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!

// Only change code below this line
const myName = "Robert";
const myString2 = "My name is " + myName + "and I am well!";

// Example:
// const anAdjective = "awesome!";
// let ourStr = "freeCodeCamp is ";
// ourStr += anAdjective;
// ourStr would have the value freeCodeCamp is awesome!.
// Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

// Change code below this line
const someAdjective = "cool";
let myStr4 = "Learning to code is ";

myStr4 += someAdjective;

//Use the .length property to set lastNameLength to the number of characters in lastName.
// // Setup
// let lastNameLength = 0;
// const lastName = "Lovelace";

// // Only change code below this line
// lastNameLength = lastName;
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// Example:

// const firstName = "Charles";
// const firstLetter = firstName[0];
// firstLetter would have a value of the string C.

// Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.

// Hint: Try looking at the example above if you get stuck.
// // Setup
// let firstLetterOfLastName = "";
// const lastName = "Lovelace";

// // Only change code below this line
// firstLetterOfLastName = lastName; // Change this line
// Setup
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName2[0]; // Change this line

// let myStr = "Bob";
// myStr[0] = "J";
// Note that this does not mean that myStr could not be re-assigned. The only way to change myStr would be to assign it with a new value, like this:

// let myStr = "Bob";
// myStr = "Job";
//Las cadenas son inmutables la unica forma de cambiar es reasignando toda la variable
// Setup
let myStr5 = "Jello World";

// Only change code below this line
myStr5 = "Hello World"; // Change this line
// Only change code above this line

// Example:

// const firstName = "Ada";
// const secondLetterOfFirstName = firstName[1];
// secondLetterOfFirstName would have a value of the string d.

// Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

// Hint: Try looking at the example above if you get stuck.

// Setup
const lastName4 = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName4[2]; // Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = ""; // Change this line
// Only change code above this line
