// todo     Agregar métodos después de la herencia
//* Una función constructora que hereda su prototypeobjeto de una función constructora de supertipo aún puede tener sus propios métodos además de los métodos heredados.

//*Por ejemplo, Birdes un constructor que hereda su prototypede Animal:

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
//*Además de lo que se hereda de Animal, desea agregar un comportamiento que sea exclusivo de los Bird objetos. Aquí, Bird obtendrá una fly()función. Las funciones se agregan de Bird's prototype la misma manera que cualquier función constructora:

Bird.prototype.fly = function () {
  console.log("I'm flying!");
};
//*Ahora las instancias de Birdtendrán ambos eat()y fly()métodos:

let duck = new Bird();
duck.eat();
duck.fly();
//*mostraría la cadena nom nom nomen la consola y duck.fly()mostraría la cadena I'm flying!.

//todo      Agregue todo el código necesario para que el Dog objeto se herede de Animal y el Dog constructor prototype se establezca en Dog. Luego agregue un bark()método al Dogobjeto para que beagle pueda tanto eat()como bark(). El bark()método debe imprimirse Woof! en la consola.

function Animal2() {}
Animal2.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal2.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Only change code above this line

let beagle = new Dog();

beagle.bark(); //*---expected “Woof!”
beagle.eat(); //*----expected "nom nom nom"
