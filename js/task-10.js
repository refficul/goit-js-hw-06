function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");
  let boxSize = 30;
  let setBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    setBoxes.push(box);
    boxSize += 10;
  }
  boxesContainer.append(...setBoxes);
}

function destroyBoxes() {
  document.querySelector("#boxes").innerHTML = "";
}

document.querySelector("[data-create]").addEventListener("click", () => {
  const amount = parseInt(document.querySelector("input").value);
  createBoxes(amount);
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
