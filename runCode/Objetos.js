console.log(7);

// Here's a sample cat object:

const cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
};
// In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:
//* En este ejemplo, todas las propiedades se almacenan como cadenas, como el nombre, las piernas y las colas. Sin embargo, también puede usar números como propiedades. Incluso puede omitir las comillas para las propiedades de cadena de una sola palabra, de la siguiente manera:
const anotherObject = {
  make: "Ford",
  5: "five",
  model: "focus",
};
// However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.
//*Sin embargo, si su objeto tiene propiedades que no son cadenas, JavaScript las encasillará automáticamente como cadenas.

//*--------------------------------------------------------------------------

//*Cree un objeto que represente a un perro llamado myDog que contenga las propiedades nombre (una cadena), piernas, colas y amigos.

//*Puede establecer estas propiedades de objeto en los valores que desee, siempre que el nombre sea una cadena, las piernas y las colas sean números y amigos sea una matriz.

const myDog = {
  name: "lucho",
  legs: 2,
  tails: 1,
  friends: ["galbrid", "lazy"],
};

//TODO-------------------------------------------------------------------------------

//TODO  1ra forma de acceder a los valores de un objeto

//*Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.

// Setup
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

console.log(testObj.hat);
console.log(shirtValue);

//TODO-------------------------------------------------------------------------------
//TODO  2ra forma de acceder a los valores de un objeto
//Here is a sample of using bracket notation to read an object's property:

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  NoSpace: "USS Enterprise",
};

myObj["Space Name"];
myObj["More Space"];
myObj["NoSpace"];

// Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

//*Lea los valores de las propiedades un plato principal y la bebida de testObj utilizando la notación de paréntesis y asígnelos a entreeValue y drinkValue respectivamente.

// Setup
const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// Only change code below this line
testObj2["an entree"]; // Change this line
testObj2["the drink"]; // Change this line
console.log(testObj2["an entree"]);
console.log(testObj2["the drink"]);
