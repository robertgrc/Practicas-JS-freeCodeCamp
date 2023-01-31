console.log("dataest3");

//*--------------------------------------------------------------------------------------
//todo Add Key-Value Pairs to JavaScript Objects - Agregar pares de clave-valor a objetos
//*--------------------------------------------------------------------------------------
//todo Add Key-Value Pairs to JavaScript Objects - Agregar pares de clave-valor a objetos
//*--------------------------------------------------------------------------------------
//todo Add Key-Value Pairs to JavaScript Objects - Agregar pares de clave-valor a objetos

const tekkenCharacter = {
  player: "Hwoarang",
  fightingStyle: "Tae Kwon Doe",
  human: true,
};

tekkenCharacter.origin = "South Korea";
tekkenCharacter["damage"] = "high damage";
tekkenCharacter["hair color"] = "dyed orange";

console.log(tekkenCharacter);
//*despues de anadir se ve el objeto de la siguiente forma:
// {
//     player: 'Hwoarang',
//     fightingStyle: 'Tae Kwon Doe',
//     human: true,
//     origin: 'South Korea',
//     'hair color': 'dyed orange',
//     'eye color': 'brown'
//   };

//*--------------------------------------------------------------------------------------
//todo A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
foods["coco"] = 77;

// Only change code below this line

// Only change code above this line

console.log(foods);

//*--------------------------------------------------------------------------------------
//todo Modify an Object Nested Within an Object

let nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};

//agregar a la estructura anidada
nestedObject.data.onlineStatus.busy = 10;
nestedObject.data.onlineStatus["estado"] = "online";
console.log(nestedObject);

//*--------------------------------------------------
//todo Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.

let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};
// Only change code below this line
userActivity.data["online"] = 45;
// Only change code above this line
console.log(userActivity);

//*--------------------------------------------------------------------------------------
//todo Access Property Names with Bracket Notation

//todo We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.
//*Hemos definido una función, checkInventory, que recibe un elemento escaneado como argumento. Devuelve el valor actual de la clave scanItem en el objeto de alimentos. Puede suponer que solo se proporcionarán claves válidas como argumento para comprobar el inventario.

let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods2[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples")); //----espected 25(valor de apples)

//*--------------------------------------------------------------------------------------
//todo  delete keyword to remove object Properties

//todo Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.

let foods7 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

// Only change code below this line
delete foods7.oranges;
delete foods7.plums;
delete foods7.strawberries;
// Only change code above this line

console.log(foods7); //*{"apples": 25,"bananas": 13,"grapes": 35}

//*--------------------------------------------------------------------------------------
//todo  Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.
//*Termine de escribir la función para que devuelva verdadero si el objeto que se le pasó contiene los cuatro nombres, Alan, Jeff, Sarah y Ryan y devuelva falso de lo contrario.

// users.hasOwnProperty('Alan');
// 'Alan' in users;
// Both of these would return true.

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;

  // Only change code above this line
}

console.log(isEveryoneHere(users));

//*--------------------------------------------------------------------

//*Termine de escribir la función para que devuelva verdadero si el objeto que se le pasó contiene los cuatro nombres, Alan, Jeff, Sarah y Ryan y devuelva falso de lo contrario.

// users.hasOwnProperty('Alan');
// 'Alan' in users;
// Both of these would return true.

let users7 = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
    userObj.hasOwnProperty(name)
  );
  // Only change code above this line
}

console.log(isEveryoneHere(users7)); //--expected true

//*---------------------------------------------------------------------------------
//todo Iterate Through the Keys of an Object with a for...in Statement

let users8 = {
  chupes: {
    age: 27,
    online: true,
  },
  rocko: {
    age: 32,
    online: true,
  },
  aleida: {
    age: 48,
    online: true,
  },
  duane: {
    age: 19,
    online: true,
  },
};

for (let user in users8) {
  console.log(user);
}

// expected chupes rocko aleida duane

//*---------------------------------------------------------------------------------
//todo We've defined a function countOnline which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.
//*Hemos definido una función countOnline que acepta un argumento (un objeto de usuarios). Utilice una instrucción for...in dentro de esta función para recorrer el objeto de usuarios pasado a la función y devolver la cantidad de usuarios cuya propiedad en línea se establece en verdadero. A continuación se muestra un ejemplo de un objeto de usuarios que podría pasarse a countOnline. Cada usuario tendrá una propiedad en línea con un valor verdadero o falso.

const users9 = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Rock: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;
  for (let user in usersObj) {
    if (usersObj[user]["online"] === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(users9));

//*---------------------------------------------------------------------------------
//todo Generate an Array of All Object Keys with Object.keys()

let users3 = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj);
  // Only change code above this line
}

console.log(getArrayOfUsers(users3)); //* <---- expected  ['Alan', 'Jeff', 'Sarah', 'Ryan']

//*---------------------------------------------------------------------------------
//todo Modify an Array Stored in an Object

let user4 = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);

  return userObj.data.friends; //----['Sam', 'Kira', 'Tomo', 'Pete']
  // Only change code above this line
}

console.log(addFriend(user4, "Pete"));

//*---------------------------------------------------------------------------------
//todo Convert Celsius to Fahrenheit

function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit = (9 / 5) * celsius + 32;
  console.log(fahrenheit);
  return fahrenheit;
}

convertCtoF(30);
