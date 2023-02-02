//todo Heredar comportamientos de un supertipo
//* En el desafío anterior, creaste un supertypellamado Animalque definía los comportamientos compartidos por todos los animales:

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};
//* Este y el próximo desafío cubrirán cómo reutilizar los métodos de Animal adentro Birdy Dog sin definirlos nuevamente. Utiliza una técnica llamada herencia. Este desafío cubre el primer paso: crear una instancia del supertype(o padre). Ya conoce una forma de crear una instancia de Animal uso del newoperador:

//todo----> let animal = new Animal();
//* Hay algunas desventajas al usar esta sintaxis para la herencia, que son demasiado complejas para el alcance de este desafío. En cambio, aquí hay un enfoque alternativo sin esas desventajas:

let animal = Object.create(Animal.prototype);
// *Object.create(obj)crea un nuevo objeto y lo establece objcomo el nuevo objeto prototype. Recuerde que prototypees como la "receta" para crear un objeto. Al configurar el prototypede animal para que sea el prototype de Animal, le está dando a la animalinstancia la misma "receta" que cualquier otra instancia de Animal.

animal.eat();
animal instanceof Animal;
console.log(animal instanceof Animal);
// *El instanceofmétodo aquí devolvería true.

// todo Úselo Object.createpara crear dos instancias de Animal named duck y beagle.

function Animal2() {}

Animal2.prototype = {
  constructor: Animal2,
  eat: function () {
    console.log("nom nom nom");
  },
};

// Only change code below this line
let duck = Object.create(Animal2.prototype);
let beagle = Object.create(Animal2.prototype);

duck.eat();
beagle.eat();
