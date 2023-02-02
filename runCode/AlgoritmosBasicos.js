//*---------------------------------------------------------------------------------
//todo Convert Celsius to Fahrenheit

function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit = (9 / 5) * celsius + 32;
  console.log(fahrenheit);
  return fahrenheit;
}

convertCtoF(30);

//*---------------------------------------------------------------------------------
//todo Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");
console.log(reverseString("hello")); //--olleh

//*El método split() separa un objeto de cadena en un arreglo de cadena al separar la cadena en subcadenas.
//*El método reverse() invierte un arreglo. El primer elemento del arreglo se convierte en el último y el último se convierte en el primero.
//*El método join() une todos los elementos de un arreglo en una cadena.

//*---------------------------------------------------------------------------------
//todo Reverse a String

function reverseString2(str) {
  let nuevaCadena = "";
  for (i = str.length - 1; i >= 0; i--) {
    nuevaCadena += str[i];
  }
  return nuevaCadena;
}

reverseString2("aleluyah");
console.log(reverseString2("aleluyah")); //

//*---------------------------------------------------------------------------------
//todo Factorialize a Number

function factorialize(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

factorialize(5);
console.log(factorialize(5)); //--120

//*---------------------------------------------------------------------------------
//todo Find the Longest Word in a String
//todo Return the length of the longest word in the provided sentence. Your response should be a number.

function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  console.log(maxLength);
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
//*Tome la cadena y conviértala en una matriz de palabras. Declare una variable para realizar un seguimiento de la longitud máxima y haga un bucle desde 0 hasta la longitud de la matriz de palabras.Luego busque la palabra más larga comparando la palabra actual con la anterior y almacenando la nueva palabra más larga. Al final del ciclo, simplemente devuelva el valor numérico de la variable maxLength.

//*---------------------------------------------------------------------------------
//todo Return Largest Numbers in Arrays

// function largestOfFour(arr) {
//   return arr.map(function (group) {
//     return group.reduce(function (prev, current) {
//       return current > prev ? current : prev;
//     });
//   });
// }

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
//*---------------------------------------------------------------------------------
//todo Confirm the Ending

function confirmEnding(str, target) {
  console.log(str.slice(-target.length));
  return str.slice(-target.length) === target;
}

confirmEnding("Bastian", "n");
console.log(confirmEnding("Bastian", "n"));
//*Si se proporciona un número negativo como primer parámetro para slice(), el desplazamiento se toma hacia atrás desde el final de la cadena.

//*---------------------------------------------------------------------------------
//todo Repeat a String Repeat a String
//*Repetir una cadena Repetir una cadena Repita una cadena dada str (primer argumento) por num times (segundo argumento). Devuelve una cadena vacía si num no es un número positivo. A los efectos de este desafío, no utilice el método integrado .repeat().
function repeatStringNumTimes(str, num) {
  let almString = "";

  for (let i = 0; i < num; i++) almString += str;

  return almString;
}

repeatStringNumTimes("abc", 3);
console.log(repeatStringNumTimes("abc", 3));

//*-----------------------------------------------
//todo Truncate a String
//todo Truncar una cadena (primer argumento) si es más larga que la longitud máxima de cadena dada (segundo argumento). Devuelve la cadena truncada con una terminación ....

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //*------Expected   (A-tisket...) 8caracteres

// Código Explicación
// Comenzamos con una ifdeclaración simple para determinar uno de dos resultados...
// Si la longitud de nuestra cadena es mayor que la numque queremos truncar, devolvemos una porción de nuestra cadena que comienza en el carácter 0 y termina en num. Luego agregamos nuestro '...'al final de la cadena.
// Sin embargo, si la situación anterior no es cierta, significa que la longitud de nuestra cadena es menor que nuestro truncamiento num. Por lo tanto, podemos simplemente devolver la cadena.

//*-----------------------------------------------
//todo Finders Keepers
// Buscadores Guardianes
//* Cree una función que mire a través de una matriz arr y devuelva el primer elemento que pase una 'prueba de verdad'. Esto significa que dado un elemento x, se pasa la 'prueba de verdad' si func(x) es verdadero. Si ningún elemento pasa la prueba, devuelve indefinido.
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// Código Explicación
// El desafío nos pide que miremos a través de la matriz. Esto se hace usando un forbucle.
// La numvariable se pasa a la función, por lo que la configuramos en cada índice de nuestra matriz.
// La función predefinida ya verifica cada número por nosotros, por lo que si es "verdadero", devolvemos ese número.
// Si ninguno de los números en la matriz pasa la prueba de la función, devolvemos indefinido.

//*-----------------------------------------------
//todo Boo who

// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.
//*Comprueba si un valor se clasifica como un primitivo booleano. Devuelve verdadero o falso. Las primitivas booleanas son verdaderas y falsas.

function booWho(bool) {
  return typeof bool === "boolean";
}
//test here
booWho(null);
console.log(booWho(null));

//*-----------------------------------------------
//todo Title Case a Sentence
//*Título Caso una Oración Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúscula. Asegúrate de que el resto de la palabra esté en minúsculas. Para el propósito de este ejercicio, también debe usar mayúsculas para conectar palabras como the y of.

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

titleCase("i'm a little tea pot");
console.log(titleCase("i'm a little tea pot")); //expected I'm A Little Tea Pot
//*Estamos haciendo la cadena completa en minúsculas y luego la convertimos en una matriz. Luego estamos usando la función de mapa para reemplazar el carácter en minúsculas con mayúsculas. Finalmente, estamos devolviendo la cadena usando el joinmétodo.

//*-----------------------------------------------
//todo Slice and Splice
//*Slice and Splice You are given two arrays and an index.Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.

//todo Cortar y empalmar Se le dan dos matrices y un índice. Copie cada elemento de la primera matriz en la segunda matriz, en orden. Comience a insertar elementos en el índice n de la segunda matriz. Devuelve la matriz resultante. Las matrices de entrada deben permanecer iguales después de que se ejecute la función.

// //todo Solución 3 (haga clic para mostrar/ocultar)
// function frankenSplice(arr1, arr2, n) {
//   return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
// }
// Explicación del código:

// Use operadores de dispersión con corte para devolver una matriz.
// El primer operador de distribución utiliza el método de corte para proporcionar solo la parte de arr2 desde el índice 0 hasta 'n'.
// El segundo operador de propagación pasa todos los elementos de arr1.
// El tercer operador de propagación utiliza el método de división para devolver todos los elementos que comienzan en el índice 'n' hasta el final de la matriz.

function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 2));

//*-----------------------------------------------
//todo Falsy Bouncer

//*Remove all falsy values from an array. Return a new array; do not mutate the original array.Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. Hint: Try converting each value to a Boolean.
//todo Gorila falso Elimina todos los valores falsos de una matriz. Devuelve una nueva matriz; no cambie la matriz original. Los valores falsos en JavaScript son falso, nulo, 0, "", indefinido y NaN. Sugerencia: intente convertir cada valor a un valor booleano

//primera forma(filtrar numeros de un arreglo)

function bouncer(arr) {
  return arr.filter(Number);
}

bouncer([7, "ate", "", false, 9]);
console.log(bouncer([7, "ate", "", false, 9]));

//segunda Forma
function bouncer2(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}

bouncer2([7, "ate", "", false, 9]);
console.log(bouncer2([7, "ate", "", false, 9]));

//*------------------------------------------------------
//todo  dado un arreglo ordenarlo en forma ascendente

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  return arr;
}

getIndexToIns([40, 60, 80, 70, 110], 50);
console.log(getIndexToIns([40, 60, 80, 70, 110], 50));

//*------------------------------------------------------
