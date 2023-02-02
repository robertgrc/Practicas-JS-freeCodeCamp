function Bird(name) {
  this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// *Hay una constructor propiedad especial ubicada en las instancias del objeto duck y beagle que se creó en los desafíos anteriores:

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird);
console.log(beagle.constructor === Dog);
//*Ambas console.log llamadas se mostrarían true en la consola.

//* Tenga en cuenta que la constructor propiedad es una referencia a la función constructora que creó la instancia. La ventaja de la constructor propiedad es que es posible verificar esta propiedad para averiguar qué tipo de objeto es. Aquí hay un ejemplo de cómo se podría usar esto:

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
// *Nota: dado que la constructorpropiedad se puede sobrescribir (lo cual se tratará en los siguientes dos desafíos), generalmente es mejor usar el instanceof método para verificar el tipo de un objeto.

//todo Escriba una joinDogFraternity función que tome un candidateparámetro y, usando la constructorpropiedad, devuelva true si el candidato es un Dog, de lo contrario devuelva false.

function Dog(name) {
  this.name = name;
}

let lazy = new Dog("cachuchin");

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

console.log(joinDogFraternity(lazy)); //----true
