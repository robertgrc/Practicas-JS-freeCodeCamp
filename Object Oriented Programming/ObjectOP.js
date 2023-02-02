console.log("Programacion orientada a objetos");
//todo------------------------------------------------------------------------
//todo Create a Method on an Object -Crear un método en un objeto

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function () {
    return "The name of this duck is " + duck.name + ".";
  },
};
duck.sayName();
console.log(duck.sayName());

//todo------------------------------------------------------------------------
//todo Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    //return `This dog has ${this.numLegs} legs.`;
    return `This dog has ${dog.numLegs} legs.`;
  },
};

dog.sayLegs();
console.log(dog.sayLegs());

//* notese que funciona tanto con this.numLegs como con dog.numLegs

//*------------------------------------------------------------------------------------------------
//todo this -- (Haga que el código sea más reutilizable con esta palabra clave)
//todo Modifique el dog.sayLegsmétodo para eliminar cualquier referencia a dog. Use el duckejemplo como guía.
let dog2 = {
  name: "Spot",
  numLegs: 7,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

dog2.sayLegs();
console.log(dog2.sayLegs());

//*------------------------------------------------------------------------------------------------
//todo crear constructor

//todo Cree un constructor, Dog, con propiedades name, color y numLegs que se establezcan en una cadena, una cadena y un número, respectivamente.
//*reglasLos constructores se definen con un nombre en mayúsculas para distinguirlos de otras funciones que no lo son constructors.
//* Los constructores usan la palabra clave thispara establecer las propiedades del objeto que crearán. Dentro del constructor, thisse refiere al nuevo objeto que creará.
//* Los constructores definen propiedades y comportamientos en lugar de devolver un valor como lo harían otras funciones.
function Dog7() {
  this.name = "chupes";
  this.color = "blue";
  this.numLegs = 4;
}

//*------------------------------------------------------------------------------------------------
//todo usar constructor para crear objetos

function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
//this dentro del constructor siempre se refiere al objeto que se está creando.

// *  tenga en cuenta que el newoperador se usa cuando se llama a un constructor. Esto le dice a JavaScript que cree una nueva instancia de Birdcalled blueBird. Sin el newoperador, thisdentro del constructor no apuntaría al objeto recién creado, dando resultados inesperados. Ahora blueBirdtiene todas las propiedades definidas dentro del Birdconstructor:
blueBird.name;
blueBird.color;
blueBird.numLegs;

//*Al igual que cualquier otro objeto, se puede acceder a sus propiedades y modificarlas:

blueBird.name = "Elvira";
blueBird.name;

//todo Usa el Dog constructor de la última lección para crear una nueva instancia de Dog, asignándola a una variable hound.

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line

let hound = new Dog();
hound.name = "chupes";
hound.color = "brow";
hound.numLegs = 2;

console.log(hound);

//*-------------------------------------------------------------------------------------------
//todo Extender constructores para recibir argumentos

let yellowBird = new Bird();
console.log(yellowBird);
//*notar que tiene los datos definidos en el constructor Bird

//* definimos Bird7, con dos propiedades que puede recibir y una numlegs que todavia sera establecida en 2

function Bird7(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let canario = new Bird7("canario negro", "negro");
console.log(canario); //--expected Bird7 {name: 'canario negro', color: 'negro', numLegs: 2}

//*-------------------------------------------------------------------------------------------
//todo Crea otro Dog9 constructor. Esta vez, configúrelo para que tome los parámetros name y color, y fije la propiedad numLegsen 4. Luego cree una nueva Dog guardada en una variable terrier. Pásale dos cadenas como argumentos para las propiedades namey color.

function Dog9(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog9("chupaco", "blanco");
console.log(terrier);
//* expected Dog9 {name: 'chupaco', color: 'blanco', numLegs: 4}

//*cada vez que creamos un objeto con un constructor decimos que es una instancia de su constructor
//*existe una forma de verificar si un objeto fue creado por un constructor utilizando(instanceof)

let Bird9 = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};

let crow = new Bird9("Alexis", "black");
let tucan = new Bird9("pipo", "rojo");

crow instanceof Bird9;
console.log(crow instanceof Bird9); //expected true
console.log(tucan instanceof Bird); //expected false estamos preguntando si fue creado por bird lo cual es falso porque fue creado por el constructor Bird9

//*-------------------------------------------------------------------------------------------
//todo Cree una nueva instancia del Houseconstructor, llámelo myHousey pase una cantidad de habitaciones. Luego, use instanceofpara verificar que es una instancia de House.
