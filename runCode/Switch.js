console.log(77);
//*Selecting from Many Options with Switch Statements
//Here is an example of a switch statement:

// switch (lowercaseLetter) {
//   case "a":
//     console.log("A");
//     break;
//   case "b":
//     console.log("B");
//     break;
// }

//*Write a switch statement which tests val and sets answer for the following conditions:
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta

function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;

    case 2:
      answer = "beta";
      break;

    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  // Only change code above this line
  return answer;
}
caseInSwitch(1);
caseInSwitch(4);

console.log(caseInSwitch(1));
console.log(caseInSwitch(4));

//*----------------------------------------------------------------

//*         Adding a Default Option in Switch Statements

//* Write a switch statement to set answer for the following conditions:
//Escriba una declaración de cambio para establecer la respuesta para las siguientes condiciones:
// a - apple
// b - bird
// c - cat
// default - stuff

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);
console.log(switchOfStuff(1));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("b"));

//*---------------------------------------------------------------
//* Write a switch statement to set answer for the following ranges:
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High

//* Note: You will need to have a case statement for each number in the range.

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);
console.log(sequentialSizes(7)); //high
console.log(sequentialSizes(5)); //Mid

//*--------------------------------------------------------------------------------
//*Replacing If Else Chains with Switch
// If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

// if (val === 1) {
//   answer = "a";
// } else if (val === 2) {
//   answer = "b";
// } else {
//   answer = "c";
// }
//* can be replaced with:

// switch (val) {
//   case 1:
//     answer = "a";
//     break;
//   case 2:
//     answer = "b";
//     break;
//   default:
//     answer = "c";
//}

//*Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
console.log(chainToSwitch(7)); //* Ate Nine
console.log(chainToSwitch(1)); //*There is no#1
console.log(chainToSwitch("bob")); //*Marley

//*------------------------------------------------------------------------------------

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
  return (
    count + (count > 1 && count < 7 ? console.log("Bet") : console.log("Hold"))
  );
}
console.log(cc(2));
