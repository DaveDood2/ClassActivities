// create a new unordered list (ul) element
const newNavItem = document.createElement("ul");

// remove the paragraph element in the nav-bar
const navBar = document.querySelector(".nav-bar");
const navP = navBar.querySelector("p");
navBar.removeChild(navP);

// add your new ul element to the nav-bar
navBar.appendChild(newNavItem);
//newNavItem.textContent = "Testingggggg";

// create two new list item (li) elements, and add some text to them
const newListItem1 = document.createElement("li");
const newListItem2 = document.createElement("li");
newListItem1.textContent = "Me and";
newListItem2.textContent = "Michael, solid as they come.";

// add the li elements to the ul in the nav-bar
newNavItem.appendChild(newListItem1);
newNavItem.appendChild(newListItem2);
