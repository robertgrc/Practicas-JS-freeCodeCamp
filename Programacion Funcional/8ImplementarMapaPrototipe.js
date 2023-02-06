//todo   Implementar mapa en un prototipo
//* Como ha visto al aplicar Array.prototype.map(), o simplemente map()antes, el map método devuelve una matriz de la misma longitud que la que se invocó. Tampoco altera la matriz original, siempre que su función de devolución de llamada no lo haga.

//* En otras palabras, map es una función pura y su salida depende únicamente de sus entradas. Además, toma otra función como argumento.

//* Puede aprender mucho sobre el map método si implementa su propia versión. Se recomienda utilizar un forbucle o Array.prototype.forEach().

//* Escribe el tuyo propio Array.prototype.myMap(), que debería comportarse exactamente como Array.prototype.map(). No debe utilizar el mapmétodo integrado. Se Arraypuede acceder a la instancia en el myMapmétodo usando this.

Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};

//Array.prototype.myMap = function (callback) {
//     const newArray = [];
//     // Only change code below this line
//     this.forEach((element, index, originalArr) =>
//       newArray.push(callback(element, index, originalArr))
//     );
//     // Only change code above this line
//     return newArray;
//   };
