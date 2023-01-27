//todo ------------------------------------------------------------------------------
//todo Generate Random Fractions with JavaScript

//usar el operador Math.random para generar un numero aleatorio entre 0-1 nunca llega a ser 1

function randomFraction() {
  // Only change code below this line
  let x = Math.random();
  console.log(x);

  return x;

  // Only change code above this line
}

randomFraction();

//todo ------------------------------------------------------------------------------
//todo  Genera números enteros aleatorios con JavaScript

//*Use Math.random() to generate a random decimal.
//* Multiply that random decimal by 20.
//* Use another function, Math.floor() to round the number down to its nearest whole number
//* la funcion floor redondea al valor inferior cercano
//todo recuerda que Math.random nos devuelve un valor entre (0-1) por lo cual en este ejemplo sera el valor(0-19)
let aleatorio = Math.floor(Math.random() * 20);
console.log(aleatorio);

//*devolver un numero aleatorio entre 1 y 9

let aleatorioEntreUnoYNueve = Math.floor(Math.random() * 10);
console.log(aleatorioEntreUnoYNueve);

//todo ------------------------------------------------------------------------------
//todo  Genera números enteros aleatorios dentro de un rango
//Retorna un valor entre un valor min y max

let max = 10;
let min = 0;

let num = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(num);

//*Cree una función llamada randomRange que tome un rango myMin y myMax y devuelva un número entero aleatorio que sea mayor o igual a myMin, y menor o igual a myMax, inclusive.

function randomRange(myMin, myMax) {
  // Only change code below this line
  let numeroEntreMaximoYMinimo =
    Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  console.log(numeroEntreMaximoYMinimo);
  return numeroEntreMaximoYMinimo;
  // Only change code above this line
}
randomRange(7, 14);
