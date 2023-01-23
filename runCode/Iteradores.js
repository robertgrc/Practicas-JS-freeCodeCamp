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
console.log(myArray2);
