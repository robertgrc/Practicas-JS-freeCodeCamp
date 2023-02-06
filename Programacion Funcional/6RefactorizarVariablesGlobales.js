// todo Refactorizar variables globales fuera de funciones
// Hasta ahora, hemos visto dos principios distintos para la programación funcional:

// No altere una variable u objeto: cree nuevas variables y objetos y devuélvalos si es necesario desde una función. Sugerencia: usar algo como const newArr = arrVar, where arrVaris a array simplemente creará una referencia a la variable existente y no una copia. Entonces, cambiar un valor en newArrcambiaría el valor en arrVar.

// Declarar parámetros de función: cualquier cálculo dentro de una función depende solo de los argumentos pasados ​​a la función, y no de ningún objeto o variable global.

// Sumar uno a un número no es muy emocionante, pero podemos aplicar estos principios cuando trabajamos con matrices u objetos más complejos.

//* Vuelva a escribir el código para que la matriz global bookList no cambie dentro de ninguna función. La addfunción debe agregar lo dado bookName al final de la matriz que se le pasó y devolver una nueva matriz (lista). La removefunción debe eliminar lo dado bookNamede la matriz que se le pasó.

//* Nota: Ambas funciones deben devolver una matriz y cualquier parámetro nuevo debe agregarse antes del bookName parámetro.

// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;

  // Change code above this line
}

let newBookList = add(bookList, "nuevo libro");
console.log(newBookList);

// Change code below this line
function remove(arr, bookName) {
  let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;

    // Change code above this line
  }
}

let removeBookList = remove(bookList, "The Hound of the Baskervilles");
console.log(removeBookList);
