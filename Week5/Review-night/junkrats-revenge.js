let someArray = [10, 55, 24, 77];
let initialValue = 0;

let finalValue = someArray.reduce(
  (acc, curr, i, arr) => {
    console.log("current accumulator value", acc);
    console.log("current value in array", curr);
    console.log("current index of value in array", i);
    console.log("array that value is in", arr);
    // add current value to accumulator value
    return acc + curr;
  },
  initialValue // set the initial value of the accumulator
);

console.log("Final value: ", finalValue);

// Challange 1
// Given an array of user objects, each with an isActive property, write a function that filters out only the active users.

const users = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
  { id: 4, name: "David", isActive: false }
];

console.log();

// Challange 2
// Given an array of products, filter out those that cost less than or equal to a specified amount of the budget 500.

const products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 200 },
  { id: 4, name: "Monitor", price: 300 }
];

const budget = 500;
let acceptableProducts = products.filter(function(product) {
  return product.price <= budget;
});
console.log(acceptableProducts);

// Challange 3
// calculate the total cost for each item in the cart.

const cart = [
  { item: "Laptop", price: 1200, quantity: 1 },
  { item: "Smartphone", price: 800, quantity: 2 },
  { item: "Headphones", price: 200, quantity: 3 }
];

let totalCost = 0;
cart.forEach(element => {
  totalCost += element.price;
});

console.log(totalCost);

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 42 },
  { name: "Charlie", grade: 67 },
  { name: "David", grade: 49 },
  { name: "Eve", grade: 95 }
];

// select only passing students (grade >= 50)
// add a 'status' field to each student's data
// log a congratulatory message for each passing student

let passingStudents = students.filter(function(student) {
  return student.grade >= 50;
});

console.log(JSON.stringify(passingStudents));

let formattedStudents = passingStudents.map(function(student) {
  return {
    name: student.name,
    grade: student.grade,
    status: true
  };
});

console.log(JSON.stringify(passingStudents));

students.forEach(function(student) {
  // console.log("Status:", student.status);
  if (student.status) {
    console.log(
      `Congratulations, ${student.name}, you passed and are very cool!!!!`
    );
  }
});

let numbers = [1, 2, 3, 4, 1340130];
let doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled);
