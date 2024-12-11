// Level 1
// Challenge: Create a function greet() that takes two parameters: firstName and lastName. The function should return a string that says, "Hello, [firstName] [lastName]!"
function greet(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}`;
}
console.log(greet("Mr.", "Boombastic"));

// Level 2
// Challenge: Write a function doubleNumber that takes a number and returns twice its value.
function doubleNumber(value) {
  return value * 2;
}
let myValue = 1;
console.log(
  `Watch me take the number ${myValue} and make it into ${doubleNumber(
    myValue
  )}`
);

// Level 3
// Challenge: Write a function isPositive that returns true if a number is positive, and immediately returns false if the number is zero or negative.
function isPositive(value) {
  if (value > 0) {
    return true;
  }
  return false;
}
console.log(`0 is positive? ${isPositive(0)}
5 is positive? ${isPositive(5)}
What about -5? ${isPositive(-5)}`);

// Level 4
// Challenge: Create an array colors containing three strings: "red", "green", and "blue". Log the second element to the console.
let colors = ["red", "green", "blue"];

// Level 5
// Challenge: Create an array numbers containing the numbers 1 to 5. Log the last array item using .length to the console.
let coolNumbers = [1, 2, 3, 4, 5];
console.log(coolNumbers[coolNumbers.length - 1]);

// Level 6
// Challenge: Create an array students containing two objects, each representing a student with properties name and age. Log the name of the first student.
let students = [
  {
    name: "Sprungus",
    age: 0
  },
  {
    name: "Donkus",
    age: -1
  }
];
console.log(students[0].name);

// Level 7
// Challenge: Create an array fruits containing "apple", "banana", and "cherry". Use a for...of loop to add each item to a new array.

// final Level!!!
const librarySystem = {
  branches: {
    mainBranch: {
      books: [
        {
          title: "1984",
          author: "George Orwell",
          publisher: "Secker & Warburg"
        },
        { title: "Brave New World", author: "Aldous Huxley" }
      ],
      manager: { name: "Alice Smith", email: "alice@library.com" }
    },
    westBranch: {
      books: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "Moby Dick", author: "Herman Melville" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger" },
        { title: "Crime and Punishment", author: "Fyodor Dostoevsky" }
      ],
      manager: { name: "Bob Johnson" }
    },
    eastBranch: {
      books: [
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
        {
          title: "Harry Potter and the Sorcerer's Stone",
          author: "J.K. Rowling"
        },
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
        { title: "The Alchemist", author: "Paulo Coelho" }
      ],
      manager: { name: "Sarah Thompson", email: "sarah@library.com" }
    }
  },
  systemInfo: {
    establishedYear: 1985
  }
};

console.log("publisher" in librarySystem.branches.mainBranch.books[0]);
let branchName = "westBranch";
console.log("publisher" in librarySystem.branches[branchName].books[0]);

function printFirstBooks() {
  let branchList = ["mainBranch", "westBranch", "eastBranch"];
  for (let branch of branchList) {
    console.log(
      `${branch} 1st book: ${librarySystem.branches[branch].books[0].title}`
    );
  }
}

printFirstBooks();

// Check if the manager of mainBranch has an email property

// Check if the first book in mainBranch has a publisher property
// console.log(
//   librarySystem.branches.mainBranch.books[0].hasOwnProperty("publisher")
// ); THE DUMB WAY >:(

// Verify if systemInfo has the certification property

// Add a function listBooks to the librarySystem object.
// The function should take the name of a branch (mainBranch or westBranch or eastbranch)
// as an argument and log the titles of the books in that branch.
