console.log("promesas");

//*A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

// const myPromise = new Promise((resolve, reject) => {
//     if(condition here) {
//       resolve("Promise was fulfilled");
//     } else {
//       reject("Promise was rejected");
//     }
//   });

//todo Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.
//*Haga que la promesa maneje el éxito y el fracaso. Si responseFromServer es verdadero, llame al método resolve para completar con éxito la promesa. Pase resolver una cadena con el valor Obtuvimos los datos. Si responseFromServer es falso, utilice el método de rechazo en su lugar y pásele la cadena: Datos no recibidos.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server

  let responseFromServer;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
