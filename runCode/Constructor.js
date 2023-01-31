console.log("constructor");
// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle("Jupiter");
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();

//todo Use the class keyword and write a constructor to create the Vegetable class. The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'

//*------------------------------------------------------------------------
//todo      Use getters and setters to Control Access to an Object

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get escritor() {
    return this._author;
  }
  // setter
  set escritor(actualizarAutor) {
    this._author = actualizarAutor;
  }
}

const novela = new Book("anonimo");
console.log(novela.escritor);
novela.escritor = "nuevoAutor";
console.log(novela.escritor);

//todo --------------------------------------------------------------------------
//todo

class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  // getter
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }

  // setter
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos);
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
