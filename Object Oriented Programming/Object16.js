//todo  Use el cierre para proteger las propiedades dentro de un objeto para que no se modifiquen externamente

// *En el desafío anterior, birdtenía una propiedad pública name. Se considera público porque se puede acceder a él y cambiarlo fuera de birdla definición de .
//* bird.name = "Duffy";
// *Por lo tanto, cualquier parte de su código puede cambiar fácilmente el nombre de bird a cualquier valor. Piense en cosas como contraseñas y cuentas bancarias que se pueden modificar fácilmente en cualquier parte de su base de código. Eso podría causar muchos problemas.

//* La forma más sencilla de hacer que esta propiedad pública sea privada es creando una variable dentro de la función constructora. Esto cambia el alcance de esa variable para que esté dentro de la función constructora en lugar de estar disponible globalmente. De esta manera, solo se puede acceder a la variable y cambiarla mediante métodos también dentro de la función constructora.

// function Bird() {
//   let hatchedEgg = 10;

//   this.getHatchedEggCount = function () {
//     return hatchedEgg;
//   };
// }
// let ducky = new Bird();
// ducky.getHatchedEggCount();
// console.log(ducky.getHatchedEggCount());

//*   Aquí getHatchedEggCounthay un método privilegiado, porque tiene acceso a la variable privada hatchedEgg. Esto es posible porque hatchedEggse declara en el mismo contexto que getHatchedEggCount. En JavaScript, una función siempre tiene acceso al contexto en el que fue creada. closure Esto se llama

//*  Cambia cómo weightse declara en la Birdfunción para que sea una variable privada. Luego, cree un método getWeightque devuelva el valor de weight15.

//todo Cambia cómo weightse declara en la Bird función para que sea una variable privada. Luego, cree un método getWeight que devuelva el valor de weight 15.

function Bird() {
  let weight = 15;
  this.getWeight = function () {
    return weight;
  };
}

let canario = new Bird();

console.log(canario.getWeight());

//*---------------------------------------------------------------------------------------
// todo Comprender la expresión de función inmediatamente invocada (IIFE)
// * Un patrón común en JavaScript es ejecutar una función tan pronto como se declara:

(function () {
  console.log("Chirp, chirp!");
})();
//* Esta es una expresión de función anónima que se ejecuta de inmediato y se genera de Chirp, chirp!inmediato.

//* Tenga en cuenta que la función no tiene nombre y no se almacena en una variable. Los dos paréntesis () al final de la expresión de la función hacen que se ejecute o invoque inmediatamente. Este patrón se conoce como una expresión de función invocada inmediatamente o IIFE .

//todo Vuelva a escribir la función makeNesty elimine su llamada para que sea una expresión de función anónima inmediatamente invocada (IIFE).

(function () {
  console.log("A cozy nest is ready");
})();
