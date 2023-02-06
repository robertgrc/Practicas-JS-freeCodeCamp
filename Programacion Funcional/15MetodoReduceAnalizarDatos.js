// todo     Use el método reduce para analizar datos
//* Array.prototype.reduce(), o simplemente reduce(), es la más general de todas las operaciones de matriz en JavaScript. Puede resolver casi cualquier problema de procesamiento de matriz utilizando el reducemétodo.

//* El reducemétodo permite formas más generales de procesamiento de matrices, y es posible demostrar que tanto filtery map pueden derivarse como aplicaciones especiales de reduce. El reducemétodo itera sobre cada elemento de una matriz y devuelve un único valor (es decir, cadena, número, objeto, matriz). Esto se logra a través de una función de devolución de llamada que se llama en cada iteración.

//* La función de devolución de llamada acepta cuatro argumentos. El primer argumento se conoce como el acumulador, al que se le asigna el valor de retorno de la función de devolución de llamada de la iteración anterior, el segundo es el elemento actual que se está procesando, el tercero es el índice de ese elemento y el cuarto es la matriz en la que reducese encuentra . llamado.

//* Además de la función de devolución de llamada, reducetiene un parámetro adicional que toma un valor inicial para el acumulador. Si no se utiliza este segundo parámetro, la primera iteración se omite y la segunda iteración pasa al primer elemento de la matriz como acumulador.

//* Vea a continuación un ejemplo que usa reduce en la usersmatriz para devolver la suma de las edades de todos los usuarios. Para simplificar, el ejemplo solo usa el primer y segundo argumento.

const users2 = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const sumOfAges = users2.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);
//* La consola mostraría el valor 64.

//* En otro ejemplo, vea cómo se puede devolver un objeto que contiene los nombres de los usuarios como propiedades con sus edades como valores.

const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];
//* La consola mostraría el valor { John: 34, Amy: 20, camperCat: 10 }.

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);
//*ejemplo1
var total = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
});
console.log(total);
// total == 6

//*ejemplo2
var integrado = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (a, b) {
  return a.concat(b);
});
console.log(integrado);
// integrado es [0, 1, 2, 3, 4, 5]

//* funcion suma normal
function sum(arr) {
  let sum = 0;
  for (const val of arr) {
    sum += val;
  }
  return sum;
}

sum([1, 3, 5, 7]); //16

//todo funcion suma normal con reduce()
function sum(arr) {
  const reducer = (sum, val) => sum + val;
  const initialValue = 0;
  return arr.reduce(reducer, initialValue);
}

sum([1, 3, 5, 7]); // 16

//   Los reduce()primeros 2 parámetros de la función son una función reducer()y un arbitrario initialValue. Luego, JavaScript llama reducer()a cada elemento de la matriz con el valor del acumulador como primer parámetro. El acumulador comienza como initialValue, y luego JavaScript usa el valor de retorno de cada reduce()llamada como el nuevo acumulador.
//*-------------------------------------------------------------------------------------------------------
//* La reduce()función en sí misma suele ser más confusa que útil. Si todo lo que necesita hacer es sumar una serie de números, es mejor que use un forbucle. Pero, cuando se combina con otros métodos de matriz como filter()y map(), reduce()comienza a verse más atractivo.

//* Por ejemplo, suponga que tiene una matriz de elementos de línea y desea calcular la suma de la totalpropiedad de cada elemento de línea.

const lineItems = [
  { description: "Eggs (Dozen)", quantity: 1, price: 3, total: 3 },
  { description: "Cheese", quantity: 0.5, price: 5, total: 2.5 },
  { description: "Butter", quantity: 2, price: 6, total: 12 },
];

//*Aquí hay una forma de sumar los artículos de línea total usando reduce():

lineItems.reduce((sum, li) => sum + li.total, 0); // 17.5

console.log(lineItems.reduce((sum, li) => sum + li.total, 0));

//* hacer lo mismo con map
console.log(lineItems.map((li) => li.total).reduce((sum, val) => sum + val, 0));

//*
