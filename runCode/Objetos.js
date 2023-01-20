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

const myDog2 = {
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
const entreeValue = testObj2["an entree"]; // Change this line
const drinkValue = testObj2["the drink"]; // Change this line
console.log(entreeValue);
console.log(drinkValue);

//TODO-------------------------------------------------------------------------------
//TODO  Accessing Object Properties with Variables

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle",
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed); //-----------------imprime doberman
//*Tenga en cuenta que no usamos comillas alrededor del nombre de la variable cuando lo usamos para acceder a la propiedad porque estamos usando el valor de la variable, no el nombre.

//*-----------------------------------------------------------------------------------
//*Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

// Setup
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

// Only change code below this line
const playerNumber = 16; // Change this line
const nuevoPlayer = 19;
const player = testObj3[playerNumber]; // Change this line
const player2 = testObj3[nuevoPlayer];
console.log(player); // -------- Montaña
console.log(player2); //--------  Unitas

//TODO-------------------------------------------------------------------------------
//TODO   updating Object Properties
// or example, let's look at ourDog:

const ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

//*todo              ourDog.name = "Happy Camper";
//*or               ourDog["name"] = "Happy Camper";
// Since he's a particularly happy dog, let's change his name to the string Happy Camper. Here's how we update his object's name property: //*todoourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.

//*Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.

// Setup
const myDog3 = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog3.name = "Happy Coder";
console.log(myDog3.name);
// Only change code below this line
