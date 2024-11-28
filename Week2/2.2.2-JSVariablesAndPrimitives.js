// create a constant variable called "name" that references a string
const username = "Lucy";
// create a reassignable variable called "favoriteSong" that references a string
let favoriteSong = "Your Head's on Fire";
// create a reassignable variable called "wage" that references a number
let wage = 0.1;
// create a variable called "age" that references a number, should it be reassignable?
let age = 24;
// create a variable called "onlyChild" that references a boolean
let onlyChild = false;
// create a variable called "satisfied" that references a boolean
let satisfied = true;
// print the types of two variables that reference two different data types (typeof)
console.log(typeof Math.PI, typeof "wow");
// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = "Raindrops on roses and whiskers on kittens";
// print the data type of "favoriteThing"
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Sponge Rock";
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = false;
console.log(typeof favoriteThing);
// Happy Birthday!
// Reassign "age" to a new value
age += 1;
// You got a big raise at work.
// Reassign "wage" to a new value
wage *= 1.01;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = !satisfied;
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log(
  "Hi, my name is " + username + " and I like the song: " + favoriteSong
);
