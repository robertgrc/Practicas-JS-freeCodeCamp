console.log(7);

//*------------------------------------------------------------------------------------
//*retorna "Bet" si esta entre 2 y 6 el valor de la carta si es otro valor  mensaje"hold"

// Count    Change	Cards
// +1   	  2, 3, 4, 5, 6
// 0	      7, 8, 9
// -1	      10, 'J', 'Q', 'K', 'A'

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
// console.log(cc(2));
// console.log(cc(3));
// console.log(cc(4));
// console.log(cc(5));
// console.log(cc(6));

// console.log(cc(7));
// console.log(cc(8));
// console.log(cc(9));

// console.log(cc(10));
// console.log(cc("J"));
// console.log(cc("Q"));
// console.log(cc("K"));
// console.log(cc("A"));

console.log(cc(3));
console.log(cc(7));
console.log(cc("Q"));
console.log(cc(8));
console.log(cc("A"));

//*-----------------------------------------------------------------------
