//todo Entender de dónde viene el prototipo de un objeto
//*Al igual que las personas heredan genes de sus padres, un objeto hereda prototype directamente de la función constructora que lo creó. Por ejemplo, aquí el Bird constructor crea el duck objeto:

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
//*duck hereda prototype de la Bird función constructora. Puedes mostrar esta relación con el isPrototypeOf método:

Bird.prototype.isPrototypeOf(duck);
console.log(Bird.prototype.isPrototypeOf(duck));
//*Esto volvería true.

//todo Úselo isPrototypeOf para verificar el prototypede beagle.(Debes mostrar que Dog.prototypees el prototypedebeagle)
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);
console.log(Dog.prototype.isPrototypeOf(beagle));
