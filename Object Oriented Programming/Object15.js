// todo Use un Mixin para agregar un comportamiento común entre objetos no relacionados
//* Como has visto, el comportamiento se comparte a través de la herencia. Sin embargo, hay casos en los que la herencia no es la mejor solución. La herencia no funciona bien para objetos no relacionados como Birdy Airplane. Ambos pueden volar, pero a Birdno es un tipo de Airplaney viceversa.

//* Para objetos no relacionados, es mejor usar mixins . Un mixin permite que otros objetos usen una colección de funciones.

let flyMixin = function (obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  };
};
//*El flyMixin toma cualquier objeto y le da el fly método.

let bird = {
  name: "Donald",
  numLegs: 2,
};

let plane = {
  model: "777",
  numPassengers: 524,
};

flyMixin(bird);
flyMixin(plane);
//*Aquí birdy plane se pasan a flyMixin, que luego asigna la flyfunción a cada objeto. Ahora birdy plane ambos pueden volar:

bird.fly();
plane.fly();
//*La consola mostraría la cadena Flying, wooosh!dos veces, una para cada .fly()llamada.

//*Observe cómo el mixin permite que el mismo flymétodo sea reutilizado por objetos no relacionados birdy plane.

//*-----------------------------------------------------------------------------------------------
// todo  Cree un mixin llamado glideMixin que defina un método llamado glide. Luego usa el glideMixin para dar ambos birdy boatla habilidad de planear.

let bird2 = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("Gliding!");
  };
};
glideMixin(boat);
glideMixin(bird2);

bird2.glide();
boat.glide();
