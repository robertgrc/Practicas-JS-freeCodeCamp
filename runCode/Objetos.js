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

//TODO-------------------------------------------------------------------------------
//TODO   Add New Properties to a JavaScript Object

// You can add new properties to existing JavaScript objects the same way you would modify them.

// Here's how we would add a bark property to ourDog:

// ourDog.bark = "bow-wow";
// or

// ourDog["bark"] = "bow-wow";
// Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

//Example:

const ourDog5 = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
};

ourDog5.bark = "bow-wow";

//*todo Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
//Agregue una propiedad de ladrido a myDog y configúrelo con un sonido de perro, como "guau". Puede utilizar la notación de puntos o corchetes.
// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };

const myDog5 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog5.bark = "woof";

console.log(myDog5);

//TODO-------------------------------------------------------------------------------
//TODO   Delete Properties from a JavaScript Object
// We can also delete properties from objects like this:

// delete ourDog.bark;
// Example:

// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"],
//   "bark": "bow-wow"
// };

// delete ourDog.bark;
// After the last line shown above, ourDog looks like:

// {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// }

const myDog6 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

delete myDog6.tails;
console.log(myDog6); //se elimino la prop tails del objeto myDog6

//TODO-------------------------------------------------------------------------------
//TODO   Using Objects for Lookups - Uso de objetos para búsquedas

//Here is an example of an article object:

const article = {
  title: "How to create objects in JavaScript",
  link: "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
  author: "Kaashan Hussain",
  language: "JavaScript",
  tags: "TECHNOLOGY",
  createdAt: "NOVEMBER 28, 2018",
};

const articleAuthor = article["author"];
const articleLink = article["link"];

const value = "title";
const valueLookup = article[value];

//*------ convertir similar al ejemplo de arriba
//* Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Setup
// function phoneticLookup(val) {
//     let result = "";

//     // Only change code below this line
//     switch(val) {
//       case "alpha":
//         result = "Adams";
//         break;
//       case "bravo":
//         result = "Boston";
//         break;
//       case "charlie":
//         result = "Chicago";
//         break;
//       case "delta":
//         result = "Denver";
//         break;
//       case "echo":
//         result = "Easy";
//         break;
//       case "foxtrot":
//         result = "Frank";
//     }
//     // Only change code above this line
//     return result;
//}
//phoneticLookup("charlie");

//*-----------------------------------------------------------
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}
phoneticLookup("charlie");
console.log(phoneticLookup("charlie"));

//TODO-------------------------------------------------------------------------------
//TODO   Testing Objects for Properties

// Example

// const myObj = {
//   top: "hat",
//   bottom: "pants"
// };

//todo myObj.hasOwnProperty("top");  --------- evaluar si existe esa propiedad
//todo myObj.hasOwnProperty("middle");--------
// The first hasOwnProperty returns true, while the second returns false.

//todo A veces es útil verificar si la propiedad de un objeto dado existe o no. Podemos usar el método de objetos .hasOwnProperty(propname) para determinar si ese objeto tiene el nombre de propiedad dado. .hasOwnProperty() devuelve verdadero o falso si la propiedad se encuentra o no

//*------------
//*Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".
//*Modifique la función checkObj para probar si un objeto pasado a la función (obj) contiene una propiedad específica (checkProp). Si se encuentra la propiedad, devuelve el valor de esa propiedad. Si no, devuelve "No encontrado".

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

const newObj = {
  margin: "nuevo margen",
  top: "hat",
  bottom: "pants",
};
const mycat = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "miauuu",
};

const objeto = checkObj(mycat, "bark");
console.log(objeto);

//TODO-------------------------------------------------------------------------------
//TODO   Manipulating Complex Objects

//todo-- Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
// You will need to place a comma after every object in the array, unless it is the last object in the array.
//*Agregue un nuevo álbum a la matriz myMusic. Agregue cadenas de artista y título, número de año_lanzamiento y una matriz de formatos de cadenas.

const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];
console.log(myMusic);

//TODO-------------------------------------------------------------------------------
//TODO   Accessing Nested Objects

//Here is a nested object:

const ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};
//ourStorage.cabinet["top drawer"].folder2 would be the string secrets, and ourStorage.desk.drawer would be the string stapler.
const miCabinet = ourStorage.cabinet["top drawer"].folder2;
let miDrawer = ourStorage.desk.drawer;
console.log(miCabinet);
console.log(miDrawer);
console.log(ourStorage);

//*Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
//*Acceda al objeto myStorage y asigne el contenido de la propiedad guantera a la variable guanteBoxContents. Siempre que sea posible, use la notación de puntos para todas las propiedades; de lo contrario, use la notación de corchetes.

// const myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };

const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

let gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents); //*---------- consola    maps( el contenido de globe box que asignamos a globeboxcontents)

//TODO-------------------------------------------------------------------------------
//TODO   Accessing Nested Objects
//Here is an example of how to access a nested array:

const ourPets = [
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"],
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"],
  },
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1]; //would be the string Fluffy
ourPets[1].names[0]; //would be the string Spot.

console.log(ourPets[0].names[1]); //* en consola imprime Fluffy

//*---------------------------
//todo --Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.
//Con la notación de puntos y corchetes, establezca la variable secondTree en el segundo elemento de la lista de árboles del objeto myPlants.
//* con la notacion de puntos y corchetes establecer a la variable secondTree en el segundo elemento de la lista de arboles

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);

//todo-------------------------------------------------------------------------
// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] = records[id][prop] || []; // shortcircuit evaluation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}
updateRecords(recordCollection, 5439, "artist", "ABBA");

console.log(recordCollection);

//TODO-------------------------------------------------------------------------------
//TODO   Iterate with JavaScript While Loops
