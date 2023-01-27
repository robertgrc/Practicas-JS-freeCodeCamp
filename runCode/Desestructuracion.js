console.log("desestructuracion");

//Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

const user = { name: "John Doe", age: 34 };
// const name = user.name;
// const age = user.age;

//*forma acortada con la desestructuracion
const { name, age } = user;
console.log(name, age);

//todo ------------------------------------------------------------------------------
//todo Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

//*reemplazar el codigo con desestructuracion
//   const today = HIGH_TEMPERATURES.today;
//   const tomorrow = HIGH_TEMPERATURES.tomorrow;

//* usando desestructuracion
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today, tomorrow); //---expected 77 80 (valores de today y tomorrow)

//todo ------------------------------------------------------------------------------
//todo Utilice la asignación de desestructuración para asignar variables de objetos

//*La desestructuración le permite asignar un nuevo nombre de variable al extraer valores. Puede hacer esto poniendo el nuevo nombre después de dos puntos al asignar el valor.

//Using the same object from the last example:

const user2 = { name: "chupes", age: 38 };

//Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user2;

console.log(userName, userAge);

//todo ------------------------------------------------------------------------------
//todo Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES2 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

//   const highToday = HIGH_TEMPERATURES2.today;
//   const highTomorrow = HIGH_TEMPERATURES2.tomorrow;

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

console.log(highToday, highTomorrow); //*------expected( cambio de nombre exitoso) 77  80

// Only change code above this line

//todo----------------------------------------------------------------------------
//todo  Use Destructuring Assignment to Assign Variables from Nested Objects

//Using an object similar to previous examples:

const user3 = {
  tia: {
    edad: 37,
    email: "isabelflores@freeCodeCamp.com",
  },
};

//*Here's how to extract the values of object properties and assign them to variables with the same name:
const {
  tia: { edad, email },
} = user3;
console.log(tia);
