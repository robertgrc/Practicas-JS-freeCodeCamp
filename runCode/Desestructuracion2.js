console.log("desestructuracion2");

//todo----------------------------------------------------------------------------
//todo  Use Destructuring Assignment to Assign Variables from Nested Objects

//Using an object similar to previous examples:
const user = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
};

const {
  johnDoe: { age, email },
} = user;
console.log(age, email);

//*And here's how you can assign an object properties' values to variables with different names:

const {
  johnDoe: { age: userAge, email: userEmail },
} = user;

console.log(userAge, userEmail);

//*---------------------------------------------------------------------------
//todo Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
//*Reemplace las dos asignaciones con una asignación de desestructuración equivalente. Aún debe asignar a las variables lowToday y highToday los valores de today.low y today.high del objeto LOCAL_FORECAST.

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const {
  today: { low: LowToday, high: highToday },
} = LOCAL_FORECAST;
console.log(LowToday, highToday);

// Only change code above this line

//*---------------------------------------------------------------------------
//todo Use Destructuring Assignment to Assign Variables from Arrays

//*Utilice la asignación de desestructuración para intercambiar los valores de a y b para que a reciba el valor almacenado en b, y b reciba el valor almacenado en a.

let a = 8,
  b = 6;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

//*---------------------------------------------------------------------------
//todo Destructuring via rest elements

const [n, m, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(n, m); //---- 1 ,2
console.log(arr); //----  [3, 4, 5, 7]
//The console would display the values 1, 2 and [3, 4, 5, 7].

//todo Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.
//*Utilice una asignación de desestructuración con la sintaxis rest para emular el comportamiento de
//*    Array.prototype.slice(). removeFirstTwo()    debería devolver una sub-matriz de la lista de matriz original con los primeros dos elementos omitidos.

//retornar sin los dos primeros elementos

function removeFirstTwo(list) {
  // Only change code below this line
  const [, , ...rest] = list;
  const shorterList = rest;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(removeFirstTwo(source)); //  ---[3, 4, 5, 6, 7, 8, 9, 10]
console.log(source); //no afecta a la cadena original   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//*---------------------------------------------------------------------------
//todo Use Destructuring Assignment to Pass an Object as a Function's Parameters
//Consider the code below:

const profileUpdate2 = (profileData) => {
  const { name, age, nationality, location } = profileData;
};

//This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate3 = ({ name, age, nationality, location }) => {};
//*---------------------------------------------------------------------------
//todo Usar asignación de desestructuración para pasar un objeto como parámetro de una función En algunos casos, puede desestructurar el objeto en un argumento de función en sí mismo.

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// // Only change code below this line
// const half = (stats) => (stats.max + stats.min) / 2.0;
// // Only change code above this line

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// const { min, max } = stats;
// console.log(min, max);
// // Only change code below this line
// const half = (max + min) / 2.0;
// // Only change code above this line
// console.log(half);
const half = ({ max, min }) => (max + min) / 2;
console.log(half);
