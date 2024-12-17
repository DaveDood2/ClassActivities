// add an event listener to the dog picture that listens for a "click" and gives an alert
let dogPicture = document.querySelector("#dog-picture");
dogPicture.addEventListener("click", () => alert("You click dog!!!"));
// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
let listItems = document.querySelectorAll("#class-schedule-list li");
listItems.forEach(element => {
  element.addEventListener("mouseover", () => {
    //event.target.style.background.color = "black";
    //console.log(element.textContent);
    element.style.backgroundColor = "black";
  });
});
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.addEventListener("keydown", event =>
  console.log("Key pressed:", event.key)
);
