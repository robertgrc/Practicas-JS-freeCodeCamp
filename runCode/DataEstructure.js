console.log("dataEstructure");
//*225 / 5.000

// *Hemos definido una variable llamada yourArray. Complete la declaración asignando una matriz de al menos 5 elementos de longitud a la variable yourArray. Su matriz debe contener al menos una cadena, un número y un valor booleano.

let yourArray = ["one", 2, "three", true, false, undefined, null];
console.log(yourArray.length); //---expected 7

//todo-------------------------------------------------------
//*In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides the letter b.

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = ["b", "new"];
// Only change code above this line
console.log(myArray);
//*['a', Array(2), 'c', 'd']

//todo-------------------------------------------------------
//*Add Items to an Array with push() and unshift()

let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];

romanNumerals.unshift("XIX", "XX");
//romanNumerals would have the value ['XIX', 'XX', 'XXI', 'XXII'].

romanNumerals.push(twentyThree);
console.log(romanNumerals); //*----expected  ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']

//todo-------------------------------------------------------
//*We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

function mixedNumbers(arr) {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);

  return arr;
}
console.log(mixedNumbers(["IV", 5, "six"])); //* expected ['I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9]

//todo-------------------------------------------------------
//* eliminar .pop(elimina del final)   .shift(elimina del principio)

//Let's take a look:

let greetings = ["whats up?", "hello", "see ya!"];

greetings.pop();
//greetings would have the value ['whats up?', 'hello'].

greetings.shift();
//greetings would have the value ['hello'].

//We can also return the value of the removed element with either method like this:

let popped = greetings.pop();
console.log(popped);
//greetings would have the value [], and popped would have the value hello.

//todo-------------------------------------------------------
//* eliminar .pop(elimina del final)   .shift(elimina del principio)
//todo We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
//*retornar los elementos extraidos de la cadena
console.log(popShift(["challenge", "is", "not", "complete"])); //* ['challenge', 'complete']

let Arreglo = ["challenge", "is", "not", "complete"];
Arreglo.pop();
Arreglo.shift();
console.log(Arreglo); //*  ['is', 'not']

//*--------------------------------------------------------------------------------
//todo

let array2 = ["today", "was", "not", "so", "great"];

nuevoArreglo = array2.splice(2, 2);
console.log(nuevoArreglo);
//* Here we remove 2 elements, beginning with the third element (at index 2). array would have the value ['today', 'was', 'great'].

// splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

let array3 = ["I", "am", "feeling", "really", "happy"];

let newArray = array3.splice(3, 2);
console.log(newArray);
//*newArray has the value ['really', 'happy'].

//todo We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
//*Hemos inicializado una matriz arr. Use splice() para eliminar elementos de arr, de modo que solo contenga elementos que sumen el valor de 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// only change code below this line
arr.splice(1, 4);
// only change code above this line
console.log(arr);

//*--------------------------------------------------------------------------------
//todo Add itesm use splice
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
//*The second occurrence of 12 is removed, and we add 13 and 14 at the same index. The numbers array would now be [ 10, 11, 12, 13, 14, 15 ].

const numbers2 = [10, 11, 12, 13, 14, 15, 15, 15, 19, 20];
const startIndex2 = 6;
const amountToDelete2 = 2;

numbers2.splice(startIndex2, amountToDelete2, 16, 17, 18);
console.log(numbers2);
//*[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//*--------------------------------------------------------
//todo We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

//*--------------------------------------------------------------------------------
//todo  Copy Array Items Using slice()

let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather);
//* todaysWeather would have the value ['snow', 'sleet'], while weatherConditions would still have ['rain', 'snow', 'sleet', 'hail', 'clear'].

//todo We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.
//todo Hemos definido una función, forecast, que toma un array como argumento. Modifique la función usando slice() para extraer información de la matriz de argumentos y devolver una nueva matriz que contenga los elementos de cadena cálidos y soleados.

function forecast(arr) {
  // Only change code below this line
  return arr.slice(2, 4);
}

// Only change code above this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
