//todo  Restablecer una propiedad de constructor heredada
// *Cuando un objeto hereda su prototype propiedad de otro objeto, también hereda la propiedad constructora del supertipo.

// *Aquí hay un ejemplo:

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// function Bird() {}
// Bird.prototype = Object.create(Animal.prototype);
//let duck = new Bird();
// duck.constructor;
//*Pero ducky todas las instancias de Bird deben mostrar que fueron construidas por Bird y no Animal. Para hacerlo, puede establecer manualmente la propiedad del constructor del Bird objeto Bird:

// Bird.prototype.constructor = Bird;
// duck.constructor;
//*Corrija el código duck.constructory beagle.constructordevuelva sus respectivos constructores.

//todo ----------------------------------------------------------------
//todo  Corrija el código duck.constructor y beagle.constructor devuelva sus respectivos constructores.

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
