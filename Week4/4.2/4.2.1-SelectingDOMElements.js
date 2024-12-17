// select all unordered list (ul) elements
let ulElements = document.getElementsByTagName("ul");
// or....
let ulElements2 = document.querySelectorAll("ul");
console.log(ulElements, ulElements2);

// select all elements with the class "class-week"
let classWeekElements = document.getElementsByClassName("class-week");
console.log(classWeekElements);

// select all elements with the class "nav-bar"
let navBarElements = document.getElementsByClassName("nav-bar");
console.log(navBarElements);

// select the element with the id "dog-picture" and save it to a variable
let docPicture = document.getElementsById("dog-picture");
console.log(docPicture);
