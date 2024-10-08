// 1. Two variables, truthy and falsy, have been created below. Assign the variable truthy to a truthy value and falsy to a falsy value.

let truthy = 1;
let falsy = 0;

// 2. Create a function called truthyOrFalsy that accepts a value and returns a statement informing you if the value is truthy or falsy.
/*
Examples:
truthyOrFalsy(0) ==> "This is a falsy value"
truthyOrFalsy(10) ==> "This is a truthy value"
truthyOrFalsy("") ==> "This is a falsy value"
truthyOrFalsy("Hello World") ==> "This is a truthy value"
*/

function truthyOrFalsy(val) {
  // YOUR CODE
  if(val == false ||
  val == undefined ||
  val == null ||
  val == "" ||
  val == NaN ||
  val == 0) {
    return "This is a falsy value"
  } else {
    return "This is a truthy value"
  }
}

// 3. Create a function called checkAge that accepts a number as an argument. Output the following based on the age provided: (a) if age is greater than or equal to 18 return "you are an adult", (b) if the age is less than 18, return "you are a minor", if the age is not provided return "Age is not provided".
/*
Examples:
checkAge(20) => "You are an adult"
checkAge(15) => "You are a minor"
checkAge(null) => "Age is not provided"
*/
function checkAge(age) {
  // YOUR CODE
  if(!age) {
    return "Age is not provided";
  } else {
    if(age >= 18) {
        return "You are an adult";
    } else {
        return "You are a minor";
    }
  }
}

// DO NOT EDIT BELOW
export { truthy, falsy, truthyOrFalsy, checkAge };
