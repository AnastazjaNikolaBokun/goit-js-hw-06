const textOutput = document.querySelector("#name-output");
const textInput = document.querySelector("#name-input");

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value.length === 0) {
    textOutput.textContent = "Anonymus";
  } else {
    textOutput.textContent = event.currentTarget.value;
  }
});
