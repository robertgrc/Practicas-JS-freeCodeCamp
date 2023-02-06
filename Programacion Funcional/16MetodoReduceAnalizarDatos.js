// Si bien reduce()a menudo se usa para sumar, no tiene por qué ser así. accumulatorPuede ser cualquier valor: número , matriz, nullPOJO , incluso una promesa .undefined

// Por ejemplo, suponga que tiene una matriz de fechas de JavaScript y desea encontrar la fecha más reciente.

const dates = [
  "2019/06/01",
  "2018/06/01",
  "2019/09/01", // This is the most recent date, but how to find it?
  "2018/09/01",
].map((v) => new Date(v));

// Un enfoque es ordenar la matriz y tomar el último elemento de la matriz ordenada. Eso funciona, pero no es tan eficiente como podría ser, y ordenar una matriz de fechas en JavaScript no es trivial .

// En su lugar, puede usar reduce()y hacer que su reductor devuelva la fecha más reciente encontrada hasta el momento.

// This works because you can compare JavaScript dates using `>` and `<`.
// So `a > b` if and only if `a` is after `b`.
const maxDate = dates.reduce((max, d) => (d > max ? d : max), dates[0]);
console.log(maxDate);

//*----------------------------------------------------------------------------------

//todo Valores de agrupación
// Dada una matriz de objetos con una agepropiedad:

const characters = [
  { name: "Jean-Luc Picard", age: 59 },
  { name: "Will Riker", age: 29 },
  { name: "Deanna Troi", age: 29 },
];
//* ¿Cómo devuelve un mapa que contiene cuántos caracteres tiene un dado age? Por ejemplo, la salida correcta en la matriz anterior sería { 29: 2, 59: 1 }.

//* Así es como puedes hacer eso con reduce().

// Start with an empty object, increment `map[age]` for each element
// of the array.
const reducer = (map, val) => {
  if (map[val] == null) {
    map[val] = 1;
  } else {
    ++map[val];
  }
  return map;
};
characters.map((char) => char.age).reduce(reducer, {});

console.log(characters.map((char) => char.age).reduce(reducer, {}));
