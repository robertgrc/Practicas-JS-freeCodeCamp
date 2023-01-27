//todo -----------------------------------------------------------------------------
//todo Use the Rest Parameter with Function Parameters

//pasar un numero de argumentos
//*Check out this code:

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));
console.log(howMany("string", null, [1, 2, 3], "otro", {}));

//* The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.
//*El parámetro rest elimina la necesidad de verificar la matriz de argumentos y nos permite aplicar map(), filter() y reduce() en la matriz de parámetros.

//todo -----------------------------------------------------------------------------
//todo Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
//Modifique la función sum usando el parámetro rest de tal manera que la función sum pueda tomar cualquier número de argumentos y devolver su suma.

// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b) => a + b, 0);
// };

const sum = (...num) => {
  return num.reduce((a, b) => a + b, 0);
};
sum(1, 2, 4); //expected 7
console.log(sum(1, 2, 3, 4, 4)); //expected 1+2+3+4+4=14;
console.log(sum(3, 4)); //expected  3+4=7;

//todo -----------------------------------------------------------------------------
//todo Use the Spread Operator to Evaluate Arrays In-Place

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);
//maximus would have a value of 89.

//todo -----------------------------------------------------------------------------
//todo Copy all contents of arr1 into another array arr2 using the spread operator.
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// arr2 = [];  // Change this line

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);
