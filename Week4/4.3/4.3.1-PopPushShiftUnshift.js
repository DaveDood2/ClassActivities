const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popped1 = nums.pop(); //0
let popped2 = nums.pop(); //1
// remove each of the first two items with shift(), saving each item to a variable
let shifted1 = nums.shift(); //6
let shifted2 = nums.shift(); //5
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(shifted2);
nums.push(shifted1);
nums.unshift(popped2);
nums.unshift(popped1);
console.log(nums);
