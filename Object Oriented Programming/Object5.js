// todo Cambiar el prototipo a un nuevo objeto (Varios al mismo tiempo)
function Bird(name) {
  this.name = name;
}

// *Hasta ahora ha estado agregando propiedades a los prototypeindividualmente:

Bird.prototype.numLegs = 2;
//*Esto se vuelve tedioso después de más de unas pocas propiedades.

Bird.prototype.eat = function () {
  console.log("nom nom nom");
};

Bird.prototype.describe = function () {
  console.log("My name is " + this.name);
};
//*Una forma más eficiente es establecer el prototypeen un nuevo objeto que ya contiene las propiedades. De esta manera, las propiedades se agregan todas a la vez:

Bird.prototype = {
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

//*-------------------------------------------------------------------
//todo Agregue la propiedad numLegs y los dos métodos eat()y describe()al prototype de Dog configurando el prototype en un nuevo objeto.

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 2,
  eat: function () {
    console.log("Ejecutar function eat");
  },
  describe: function () {
    console.log("Ejecutar funcion describe ");
  },
};

let firulais = new Dog("firu");
console.log(firulais);
console.log(firulais.describe());
console.log(firulais.eat());
