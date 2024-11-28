// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let thing1 = true;
let thing2 = 0;
let thing3 = "wow a string";
let thing4 = null;
let thing5;
let thing6 = thing5;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(
  typeof thing3,
  typeof thing2,
  typeof thing1,
  typeof thing5,
  typeof thing4
);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let temp = `I'm fascinated with ${thing5} and ${thing4}!`;
console.log(temp);
// reassign the value of the variable that references "null"
thing4 = "not null";
// print the value and its type
console.log(thing4, typeof thing4);
// print a variable that causes a ReferenceError
console.log(thing6);
// alter the previous line to no longer cause a ReferenceError
