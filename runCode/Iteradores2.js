console.log("iteradores2");

function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  console.log(product);
  return product;
}
multiply([1, 2, 3, 4, 5], 5);

function multiply2(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply2(arr, n - 1) * arr[n - 1];
  }
}
multiply2([1, 2, 3, 4, 5], 7);

//todo Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

//todo ------------------------------------------------------

//*Búsqueda de perfil
//* Tenemos una variedad de objetos que representan a diferentes personas en nuestras listas de contactos.

//* Se ha escrito previamente una función lookUpProfile que toma el nombre y una propiedad (prop) como argumentos.

//* La función debe verificar si el nombre es el nombre real de un contacto y si la propiedad dada (prop) es una propiedad de ese contacto.

//* Si ambos son verdaderos, devuelva el "valor" de esa propiedad.

//* Si el nombre no corresponde a ningún contacto, devuelva la cadena No hay tal contacto.

//* Si prop no corresponde a ninguna propiedad válida de un contacto que coincida con el nombre, devuelva la cadena No such property

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Sherlock", "lastName"));
