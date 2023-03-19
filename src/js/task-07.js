const fontSize = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

output.style.fontSize = `${fontSize.value}px`;

fontSize.addEventListener("input", () => {
  output.style.fontSize = `${fontSize.value}px`;
});
