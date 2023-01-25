console.log("iterar");
//todo-----------------------------------------------------------------------------
//todo Iterate with JavaScript While Loops(while)

const ourArray = [];
let j = 0;

while (j < 5) {
  ourArray.push(j);
  j++;
}
console.log(ourArray); //imprime del 0 al 4 (5) => [0, 1, 2, 3, 4]

//todo Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
const myArray = [];
let i = 5;
while (i > -1) {
  myArray.push(i);
  i--;
}
console.log(myArray); //(6) [5, 4, 3, 2, 1, 0]

//*--------------------------------------------------------
//*Iterate with JavaScript For Loops
//*Ejemplo de uso de bucle for

const ourArray2 = [];

for (let i = 0; i < 10; i++) {
  ourArray2.push(i);
}

console.log(ourArray2); //(10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//TODO Use a for loop to push the values 1 through 5 onto myArray.

const myArray2 = [];

for (let i = 1; i < 6; i++) {
  myArray2.push(i);
}
console.log(myArray2); //(5) [1, 2, 3, 4, 5]

//todo-----------------------------------------------------------------------------
//todo Iterate Odd Numbers With a For Loop

//*iterar numeros pares
const ourArray3 = [];

for (let i = 0; i < 10; i += 2) {
  ourArray3.push(i);
}
console.log(ourArray3); //[0, 2, 4, 6, 8]

//todoPush the odd numbers from 1 through 9 to myArray using a for loop.

const myArray4 = [];

for (let i = 1; i < 10; i += 2) {
  myArray4.push(i);
}
console.log(myArray4); //[1, 3, 5, 7, 9]

//todo Push the odd numbers from 9 through 1 to myArray using a for loop.
//Empuje los números impares del 9 al 1 a myArray usando un bucle for.

const myArray6 = [];
for (let i = 9; i > 0; i -= 2) {
  myArray6.push(i);
}
console.log(myArray6);

//todo---------------------------------------------------------------------
//todo Iterate Through an Array with a For Loop

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(arr); //clg [10, 9, 8, 7, 6];

//*Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
//*sumatoria de myArr en una variable llamada total
const myArr = [2, 3, 4, 5, 6];

let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);

//todo---------------------------------------------------------------------
//todo Nesting For Loops
const arr7 = [[1, 2], [3, 4], [5, 6], [7]];

for (let i = 0; i < arr7.length; i++) {
  for (let j = 0; j < arr7[i].length; j++) {
    console.log(arr7[i][j]);
  }
}

//*-------
//todo Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
// multiplica  cada elemento dentro de multiplyAll y la acumulacion total es el producto
function multiplyAll(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]; //*---------------------product = product * arr[i][j];
      console.log(product); //--------------5040
    }
  }

  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

//todo---------------------------------------------------------------------
//todo Iterate with JavaScript Do...While Loops

// Setup
const myArray7 = [];
let k = 10;

// Only change code below this line
do {
  myArray.push(k);
  k++;
} while (k < 11);

console.log(myArray7);
