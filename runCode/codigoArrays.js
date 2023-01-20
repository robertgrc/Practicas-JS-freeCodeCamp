//*Hay 6 tipos de datos primitivos: string, number, bigint, boolean, undefined y symbol. estos tipos primitivos no se
//*los tipos primitivos si se declaran constantes no se los puede modificar,

// In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

// You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

// You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.

console.log("hola mundo");
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
//const wordBlanks = "big " + "dog " + "ran " + "quickly" + ".";
var wordBlanks =
  "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Only change this line;
const wordBlanks2 = "myNoun " + "myAdjective " + "myVerb " + "myAdverb";
console.log(wordBlanks);

// Store Multiple Values in one Variable using JavaScript Arrays
// With JavaScript array variables, we can store several pieces of data in one place.

// You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

// const sandwich = ["peanut butter", "jelly", "bread"];
// Modify the new array myArray so that it contains both a string and a number (in that order).
//*Modifique la nueva matriz myArray para que contenga tanto una cadena como un número (en ese orden).
const myArray = ["cadena", 2];
console.log(myArray);

//* Nest one Array within Another Array
// You can also nest arrays within other arrays, like below:

// const teams = [["Bulls", 23], ["White Sox", 45]];
// This is also called a multi-dimensional array.

// Create a nested array called myArray.

const myArray2 = [
  ["clokwork", "jwong", "prbr", 3],
  ["rock", "regue", "pop"],
];
console.log(myArray2);

// Cree una variable llamada myData y configúrela para que sea igual al primer valor de myArray utilizando la notación de paréntesis.
const myArray3 = [50, 60, 70];

const myData = myArray3[0];
console.log(myData);

//* Modificar datos de matriz con índices
// A diferencia de las cadenas, las entradas de los arreglos son mutables y se pueden cambiar libremente, incluso si el arreglo se declaró con const.
// Ejemplo
// const nuestroArray = [50, 40, 30];
// nuestroArray[0] = 15;
// ourArray ahora tiene el valor [15, 40, 30].
// Nota: No debe haber espacios entre el nombre de la matriz y los corchetes, como la matriz [0]. Aunque JavaScript puede procesar esto correctamente, esto puede confundir a otros programadores al leer su código.
// Modifique los datos almacenados en el índice 0 de myArray a un valor de 45.

// *Setup
const myArray4 = [18, 64, 99];

//* Only change code below this line
myArray4[0] = 45;

console.log(myArray4);

//*Access Multi-Dimensional Arrays With Indexes
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14]
//   ];

//   const subarray = arr[3];
//   const nestedSubarray = arr[3][0];
//   const element = arr[3][0][1];

// In this example, subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the value [10, 11, 12], and element has the value 11 .

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
console.log(subarray);
console.log(nestedSubarray);
console.log(element);

//*Using bracket notation select an element from myArray such that myData is equal to 8.

const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData5 = myArray5[2][1];
console.log(myData5);

//*Manipulate Arrays With push()
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr1, arr2);

//*Push ["dog", 3] onto the end of the myArray variable.
// Setup
const myArray6 = [
  ["John", 23],
  ["cat", 2],
];
myArray6.push(["dog", 3]);

console.log(myArray6);

//*Manipulate Arrays With pop()
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
//El primer archivo console.log mostrará el valor 6 y el segundo mostrará el valor [1, 4].

//*Use la función .pop() para eliminar el último elemento de myArray y asigne el valor extraído a una nueva variable, addedFromMyArray.

// Setup
const myArray7 = [
  ["John", 23],
  ["cat", 2],
];
// Only change code below this line
const addedFromMyArray = myArray7.pop();
console.log(addedFromMyArray);

//*Manipular matrices con shift ()
// pop() siempre elimina el último elemento de una matriz. ¿Qué sucede si desea eliminar el primero?

// Ahí es donde entra en juego .shift(). Funciona igual que .pop(), excepto que elimina el primer elemento en lugar del último.

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);
console.log(ourArray);

// Setup
// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.
const myArray8 = [
  ["John", 23],
  ["dog", 3],
];
const removedFromArray8 = myArray8.shift();

console.log(removedFromArray8);
console.log(myArray8);
// Only change code below this line

//* Manipulate Arrays With unshift()
// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

// Example:

const ourArray2 = ["Stimpson", "J", "cat"];
ourArray2.shift();
ourArray2.unshift("Happy");
console.log(ourArray2);
// After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].

//* Add ["Paul", 35] to the beginning of the myArray variable using unshift().
// Setup
const myArray9 = [
  ["John", 23],
  ["dog", 3],
];
myArray9.shift();

// Only change code below this line
myArray9.unshift(["Paul", 35]);
console.log(myArray9);

//*Shopping List
const myList = [
  ["mou Bar", 5],
  ["ilusion", 1],
  ["Restaurant", 4],
  ["school", 3],
  ["hospital", 4],
];
