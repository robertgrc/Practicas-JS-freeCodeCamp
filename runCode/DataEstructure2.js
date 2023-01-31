//todo Copy an Array with the Spread Operator

//In practice, we can use the spread operator to copy an array like so:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thisArray);
console.log(thatArray);

//thatArray equals [true, true, undefined, false, null]. thisArray remains unchanged and thatArray contains the same elements as thisArray.

//todo We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).
//Hemos definido una función, copyMachine que toma arr (una matriz) y num (un número) como argumentos. Se supone que la función devuelve una nueva matriz compuesta de num copias de arr. Hemos hecho la mayor parte del trabajo por usted, pero aún no funciona del todo bien. Modifique la función usando la sintaxis extendida para que funcione correctamente (pista: ¡otro método que ya hemos cubierto podría ser útil aquí!).

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
    // Only change code above this line
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
//expected--- 0 [true, false, true]  [true, false, true]

console.log(copyMachine([7, 7, 7], 3)); //*---[7, 7, 7] [7, 7, 7] [7, 7, 7]

//*------------------------------------------------------------------------------
//*todo Combine Arrays with the Spread Operator

let thisArray7 = ["sage", "rosemary", "parsley", "thyme"];

let thatArray7 = ["basil", "cilantro", ...thisArray7, "coriander"];

console.log(thatArray7);
//*thatArray would have the value ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

//*------------------------------------------------------------------------------
//*todo We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}

console.log(spreadOut());

//*------------------------------------------------------------------------------
//*todo Check For The Presence of an Element With indexOf()

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];

fruits.indexOf("dates");
fruits.indexOf("oranges");
fruits.indexOf("pears");
console.log(fruits.indexOf("dates")); //*---- -1  (no existe)
console.log(fruits.indexOf("oranges")); //*---- 2  (existe en posicion 2)
console.log(fruits.indexOf("pears")); //*---- 1

//*indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears') returns 1 (the first index at which each element exists).

//*--------------------------------------------------
//todo indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
//indexOf() puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en una matriz. Hemos definido una función, QuickCheck, que toma una matriz y un elemento como argumentos. Modifique la función utilizando indexOf() para que devuelva verdadero si el elemento pasado existe en la matriz y falso si no existe.
function quickCheck(arr, elem) {
  // Only change code below this line
  //return arr.indexOf(elem) >= 0 ? true : false; //*primera forma

  return arr.indexOf(elem) != -1 ? true : false; //Segunda forma

  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//*------------------------------------------------------------------------------
//*todo Iterate Through All an Array's Items Using For Loops
//*todo Iterar a través de todos los elementos de una matriz usando bucles for

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1])); //----[12, 14, 80]

//*------------------------------------
//* dados un arreglo con elem si es que elem no se encuentra en el arreglo a evaluar entonces agregarlo al newArr

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    9
  )
);

//*--------------------------------------------------------------------------------------
//todo Create complex multi-dimensional arrays

let nestedArray = [
  ["deep"],
  [["deeper"], ["deeper"]],
  [[["deepest"], ["new"]], [[["deepest-est?"]]]],
];

console.log(nestedArray[2][1][0][0][0]); //---deepest-est?
console.log(nestedArray[2][0][1]); //---new?

//*--------------------------------------------------------------------------------------
//todo We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.
//*Hemos definido una variable, myNestedArray, establecida igual a una matriz. Modifique myNestedArray, usando cualquier combinación de cadenas, números y valores booleanos para los elementos de datos, de modo que tenga exactamente cinco niveles de profundidad (recuerde, la matriz más externa es el nivel 1). En algún lugar del tercer nivel, incluya la cuerda más profunda, en el cuarto nivel, incluya la cuerda más profunda, y en el quinto nivel, incluya la cuerda más profunda.
let myNestedArray = [
  // change code below this line
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]],
  // change code above this line
];

console.log(myNestedArray[4][6][0][0][0]); //----deepest
console.log(myNestedArray[2][3]); //----spread
