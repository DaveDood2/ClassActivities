// create a variable referencing a primitive value
let y = 3;

// "pass" the value to x
// x and y === 3, but each is referencing a different copy of the value
let x = y;

// function to mutate
const addOne = (num) => num + 1;

// mutate y
addOne(y);
// now, y === 4
console.log(y);
// x is still === 3
console.log(x);
