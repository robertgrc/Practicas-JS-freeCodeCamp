// todo Establecer el prototipo del niño en una instancia del padre

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Bird(name) {
  this.name = name;
}
// *En el desafío anterior, vio el primer paso para heredar el comportamiento del supertipo (o padre) Animal: crear una nueva instancia de Animal.

// *Este desafío cubre el siguiente paso: configurar el prototypedel subtipo (o secundario), en este caso, Birdpara que sea una instancia de Animal.

Bird.prototype = Object.create(Animal.prototype);
// *Recuerda que prototypees como la "receta" para crear un objeto. En cierto modo, la receta por Birdahora incluye todos los "ingredientes" clave de Animal.

let duck = new Bird("Donald");
duck.eat();

// *duckhereda todas Animallas propiedades de , incluido el eatmétodo.

// *Modifique el código para que las instancias de Doghereden de Animal.

//todo---------------------------------------------------------------------
//todo Modifique el código para que las instancias de Dog hereden de Animal.

function Animal2() {}

Animal2.prototype = {
  constructor: Animal2,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

Dog.prototype = Object.create(Animal2.prototype);
// Only change code below this line

let beagle = new Dog();

beagle.eat(); //----expected nom nom nom
