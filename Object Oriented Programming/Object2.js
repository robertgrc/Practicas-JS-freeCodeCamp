//*En el siguiente ejemplo, el Birdconstructor define dos propiedades: name y numLegs:

function Bird(name) {
  this.name = name;
  //this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary2 = new Bird("Tweety");

//*namey numLegsse llaman propiedades propias , porque se definen directamente en el objeto de instancia. Eso significa que duck cada canary uno tiene su propia copia separada de estas propiedades. De hecho, cada instancia de Bird tendrá su propia copia de estas propiedades. El siguiente código agrega todas las propiedades propias de duck la matriz ownProps:

let ownProps2 = [];
for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps2.push(property);
  }
}

console.log(ownProps2);
//*La consola mostraría el valor ["name", "numLegs"].

// todo Agregue las propiedades propias de canary a la matriz ownProps.

function Bird5(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird5("Tweety");
let ownProps = [];
for (let propiedad in canary) {
  if (canary.hasOwnProperty(propiedad)) {
    ownProps.push(propiedad);
  }
}

console.log(ownProps);
// Only change code below this line
//*--------------------------------------------------------------
//todo definir una prop con prototype
Bird.prototype.numLegs = 7;

let piolin = new Bird("pajarillo");

console.log(duck.numLegs); //---expected7
console.log(piolin.numLegs); // expected7

//*--------------------------------------------------------------
//todo Iterar sobre todas las propiedades
