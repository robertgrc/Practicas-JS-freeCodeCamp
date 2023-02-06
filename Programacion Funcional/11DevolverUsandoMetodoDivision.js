// todo     Devolver parte de una matriz usando el método de división
//* El slicemétodo devuelve una copia de ciertos elementos de una matriz. Puede tomar dos argumentos, el primero proporciona el índice de dónde comenzar el segmento, el segundo es el índice de dónde finalizar el segmento (y no es inclusivo). Si no se proporcionan los argumentos, el valor predeterminado es comenzar desde el principio de la matriz hasta el final, que es una manera fácil de hacer una copia de toda la matriz. El slicemétodo no muta la matriz original, sino que devuelve una nueva.

//* Aquí hay un ejemplo:

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
console.log(newArray);
//new Arraytendría el valor ["Dog", "Tiger"].

//todo Use el slicemétodo en la sliceArrayfunción para devolver parte de la anim matriz dados los beginSliceíndices endSliceproporcionados. La función debe devolver una matriz.

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  return anim.slice(beginSlice, endSlice);
  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
console.log(sliceArray(inputAnim, 1, 3));
//new Arraytendría el valor ["Dog", "Tiger"].
