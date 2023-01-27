//todo regla1 Cuando se llama a una función en el ámbito global, this hace referencia de forma predeterminada al objeto global (window en el navegador, o global en Node.js)

// function foo() {
//   this.a = 2;
// }

// foo();
// console.log(a); // 2

//todo regla2 Claramente, en el fragmento anterior, la función foo() se llama en el contexto del objeto obj, por lo tanto this ahora hace referencia a obj. Entonces, cuando se llama a una función con un objeto de contexto, la referencia  this se vincula a dicho objeto.

function foo() {
  this.a = 2;
}

const obj = {
  foo: foo,
};

obj.foo();
console.log(obj.a); // 2

//todo regla3 .call, .apply y .bind pueden utilizarse para enlazar explícitamente this. Usar .bind(this) es algo que podemos ver en muchos componentes de React.

const foo2 = function () {
  console.log(this.bar);
};

foo2.call({ bar: 7 }); // 1

//*Aquí vemos algunos ejemplos rápidos de como utilizar cada uno para enlazar this:

// .call(): fn.call(thisObj, fnParam1, fnParam2)
// .apply(): fn.apply(thisObj, [fnParam1, fnParam2])
// .bind(): const newFn = fn.bind(thisObj, fnParam1, fnParam2)

//todo regla4

function Point2D(x, y) {
  this.x = x;
  this.y = y;
}

const p1 = new Point2D(1, 2);
console.log(p1.x); // 1
console.log(p1.y); // 2

//*Lo que notamos aquí es que al llamar a la función Point2D utilizando la palabra clave new, la referencia this se vincula al objeto p1. Entonces, cuando llamamos a una función utilizando new, un nuevo objeto es creado y la referenciathis se vincula al mismo.

//*Nota: A una función que llamamos utilizando la palabra clave new también la conocemos como función constructora.

//todo regla5 JavaScript determina el valor de this en tiempo de ejecución, según el contexto actual. Por eso a veces this podría no estar apuntando a dónde esperamos.

//todo Veamos este ejemplo, una clase Gato que tiene un método llamado hacerSonido(), siguiendo lo que vimos en la regla anterior, utilizamos una función constructora y la palabra clave new.

// const Gato = function (nombre, sonido) {
//   this.nombre = nombre;
//   this.sonido = sonido;
//   this.hacerSonido = function () {
//     console.log(this.nombre + " decir: " + this.sonido);
//   };
// };

// const gatito = new Gato("Papá Gordo", "Mrrooowww");
// gatito.haceSonido(); // Papá Gordo dice: Mrrooowww

//* Ahora vamos a agregarle al gato el método molestar() para que puedan molestar a las personas repitiendo su sonido 100 veces, con un período de repetición de medio segundo.

// const Gato = function (nombre, sonido) {
//   this.nombre = nombre;
//   this.sonido = sonido;
//   this.hacerSonido = function () {
//     console.log(this.nombre + " decir: " + this.sonido);
//   };
//   this.molestar = function () {
//     let contar = 0,
//       max = 100;
//     const t = setInterval(function () {
//       this.hacerSonido(); // <-- esta línea falla con `this.hacerSonido no es una función`
//       count++;
//       if (contar === max) {
//         clearTimeout(t);
//       }
//     }, 500);
//   };
// };

// const gatito = new Gato("Papá Gordo", "Mrrooowww");
// gatito.molestar();
