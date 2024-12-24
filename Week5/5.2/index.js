// save the form DOM element to a variable to be used later
const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();

  console.log("The form was submitted!");

  console.log("event", event);

  // Inputs will have field names & values
  const inputs = event.target.elements;
  console.log("form's input elements: ", inputs);

  // Utilizing for... of loop to access name/value of inputs
  Array.from(inputs).forEach(input => {
    console.log(
      `This input is named ${input.name} and has a value of ${input.value}`
    );
  });
});
