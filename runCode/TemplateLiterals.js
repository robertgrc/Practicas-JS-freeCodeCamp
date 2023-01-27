console.log("templateLiterales");
//*---------------------------------------------------------------------------
//todo Create Strings using Template Literals

//Consider the code below:

const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

//*---------------------------------------------------------------------------
//todo Create Strings using Template Literals

//*Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.
//*Use an iterator method (any kind of loop) to get the desired output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>',
];

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
  "use strict";
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(makeList(result.failure));

//*------------------------------------------------------------------------------
//*Write Concise Object Literal Declarations Using Object Property Shorthand

const getMousePosition = (x, y) => ({
  x: x,
  y: y,
});

const getMousePosition2 = (x, y) => ({ x, y });

//todo Use object property shorthand with object literals to create and return an object with name, age and gender properties.

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender,
  };
  // Only change code above this line
};

console.log(createPerson("robert", 37, "Masculino")); //*-----{name: 'robert', age: 37, gender: 'Masculino'}

const createPerson2 = (nombre, edad, genero) => ({ nombre, edad, genero }); //forma acortada

console.log(createPerson2("robert", 37, "Masculino")); //*-----{name: 'robert', age: 37, gender: 'Masculino'}

//todo----------------------------------------------------------------------------
//todo Write Concise Declarative Functions with ES6

//When defining functions within objects in ES5, we have to use the keyword function as follows:
const person5 = {
  name: "Taylor",
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  },
};
console.log(person5);

//With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
const person7 = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  },
};
console.log(person7);

//todo----------------------------------------------------------------------------
//todo Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
