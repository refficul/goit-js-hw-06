const elements = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  countValue: document.querySelector("#value"),
};

elements.decrementBtn.addEventListener("click", handlerDecrementBtnClick);
elements.incrementBtn.addEventListener("click", handlerIncrementBtnClick);

let counterValue = 0;
function handlerDecrementBtnClick() {
  counterValue -= 1;
  elements.countValue.textContent = `${counterValue}`;
}

function handlerIncrementBtnClick() {
  counterValue += 1;
  elements.countValue.textContent = `${counterValue}`;
}
