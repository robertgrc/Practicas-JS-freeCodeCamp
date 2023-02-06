Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this)) === true) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};

// Solution 2 (Click to Show/Hide)
// Array.prototype.myFilter = function (callback) {
//   const newArray = [];
//   // Only change code below this line
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this) == true) {
//       newArray.push(this[i]);
//     }
//   }
//   // Only change code above this line
//   return newArray;
// };
//  Solution 3 (Click to Show/Hide)
// Array.prototype.myFilter = function (callback) {
//   const newArray = [];
//   // Only change code below this line
//   for (const [index, elem] of this.entries()) {
//     if (callback(elem, index, this)) newArray.push(elem);
//   }
//   // Only change code above this line
//   return newArray;
// };
