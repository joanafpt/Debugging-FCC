//Debugging: Catch Use of Assignment Operator Instead of Equality Operator

//Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.

/*As covered in previous challenges, the assignment operator (=) in JavaScript assigns a value to a variable name. And the == and === operators check for equality (the triple === tests for strict equality, meaning both value and type are the same).*/

let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
  result = "Equal!"; // the operator = just assigns values, don't compare them 
} else {
  result = "Not equal!"; // the operator = assigns values, don't compare 
}

console.log(result);