// refactor the functions below into arrow syntax
const myNumberFunction = () => {
  return ((2 ** 2 + 3) % 4) * 14;
};

const greet = name => {
  return `Hello, ${name}`;
};

const timeOfDayGreet = (name, timeOfDay) => {
  return `Hello, ${name}, good ${timeOfDay}`;
};

const tripleAndHalf = num => {
  let triple = num * 3;
  return triple / 2;
};

const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};

myNumberFunction();

greet("Lucy");

timeOfDayGreet("Lucy", "unholy hour");

console.log(tripleAndHalf(0));

sumTwoNumbers(0, 0);
