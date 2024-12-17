// Challenge 3: Interactive Page
let alertButton = document.querySelector("#alert-button");

alertButton.addEventListener("click", () => {
  alert("Wow!");
});
// Challenge 5: DOM Manipulation
let changingText = document.querySelector("#dynamic-text");
let changingTextButton = document.querySelector("#change-text-button");
changingTextButton.addEventListener("click", () => {
  let randomText = "NGRATULATION".split("");
  randomText.sort(() => Math.random() - 0.5);
  changingText.textContent = "CO" + randomText.join("") + "S!!!";
});

// Challenge 7: Dynamic List Generation
let dynamicList = document.querySelector("#dynamic-list");
let addListItem = document.querySelector("#add-list-item");
let listCount = 0;
addListItem.addEventListener("click", () => {
  listCount++;
  let newListItem = document.createElement("li");
  newListItem.textContent = listCount;
  dynamicList.appendChild(newListItem);
});
