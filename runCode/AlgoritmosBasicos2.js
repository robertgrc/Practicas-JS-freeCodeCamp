//todo Dónde pertenezco
//* Devuelve el índice más bajo en el que se debe insertar un valor (segundo argumento) en una matriz (primer argumento) una vez que se ha ordenado. El valor devuelto debe ser un número.

function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([40, 60], 50);
console.log(getIndexToIns([40, 60], 50)); //---expected retorna la posicion 1

//*-------------------------------------------
// todo Mutaciones
//* Retorna verdadero si la cadena en el primer elemento de la matriz contiene todas las letras de la cadena en el segundo elemento de la matriz.
//* Por ejemplo, ["hello", "Hello"] debería devolver verdadero porque todas las letras de la segunda cadena están presentes en la primera, ignorando el caso.
//* Los argumentos ["hello", "hey"] deberían devolver falso porque la cadena hola no contiene una y.
//*Por último, ["Alien", "line"] debería devolver verdadero porque todas las letras en línea están presentes en Alien.

//*solucion1
// function mutation(arr) {
//   let test = arr[1].toLowerCase();
//   let target = arr[0].toLowerCase();
//   for(let i=0; i<test.length ; i++){
//     if(target.indexOf(test[i])<0) return false
//   }
//   return true
// }

// mutation(["hello", "hey"]);
// Código Explicación
// Primero ponemos las dos cadenas en la matriz en minúsculas. testmantendrá lo que estamos buscando en target.
// Luego recorremos nuestros caracteres de prueba y, si alguno de ellos no se encuentra, lo hacemos return false.

// Si se encuentran todos , el ciclo terminará sin devolver nada y llegaremos a return true.

//* solucion2

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}

mutation(["hello", "hey"]);
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "he"]));

//   Código Explicación
// Tome la segunda cadena, en minúsculas y conviértala en una matriz; luego asegúrese de que cada una de sus letras sea parte de la primera cadena en minúsculas.

// Everybásicamente le dará letra por letra para comparar, lo que hacemos usando indexOfen la primera cadena. indexOfle dará -1 si letterfalta la corriente. Comprobamos que no sea así, ya que si esto ocurre aunque sea una vez everyserá falso.
//todo-----------------------------------------------------------------------------
//todo Chunky Monkey - Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
//* mono fornido
//* Escriba una función que divida una matriz (primer argumento) en grupos de la longitud del tamaño (segundo argumento) y los devuelva como una matriz bidimensional.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7], 3));

//  (['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
// ([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
// ([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
// ([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]

//todo-----------------------------------------------------------------------------
//todo
//todo-----------------------------------------------------------------------------
//todo
