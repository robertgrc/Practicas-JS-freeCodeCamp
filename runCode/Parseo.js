console.log("Parseo");
//todo--------------------------------------------------------------------------
//todo Use the parseInt Function

//*conversion de tipo de dato string a entero

const a = parseInt("007");
console.log(a); //*==> expected 7

//todo--------------------------------------------------------------------------
//todo Use the parseInt Function with a Radix

function convertToInteger(str) {
  const a = parseInt(str, 2);
  return a;
}

convertToInteger("10011");
