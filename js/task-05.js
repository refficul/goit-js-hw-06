const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", customInput);

function customInput(e) {
  nameOutput.textContent = e.currentTarget.value.trim();

  if (e.currentTarget.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  }
}
