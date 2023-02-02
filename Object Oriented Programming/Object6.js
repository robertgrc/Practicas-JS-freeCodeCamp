// todoRecuerde establecer la propiedad del constructor al cambiar el prototipo
//* Hay un efecto secundario crucial de configurar manualmente el prototipo en un nuevo objeto. ¡Borra la constructorpropiedad! Esta propiedad se puede usar para verificar qué función constructora creó la instancia, pero dado que la propiedad se sobrescribió, ahora da resultados falsos:
function Bird(name) {
  this.name = name;
}
let duck = new Bird("Donald");

duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;

console.log(duck.constructor === Bird);
console.log(duck.constructor === Object);
console.log(duck instanceof Bird);
//*En orden, estas expresiones se evaluarían como false, true y true.

//*Para solucionar esto, siempre que un prototipo se establezca manualmente en un nuevo objeto, recuerde definir la constructor propiedad:

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

//todo Defina la constructor propiedad en el Dog prototype.
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

let rotwailer = new Dog("cachorro");
console.log(rotwailer.constructor === Dog);
console.log(rotwailer.constructor === Object);
console.log(rotwailer instanceof Dog);
