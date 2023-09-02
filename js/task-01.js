const numbers = document.querySelectorAll(".item");
console.log(`Number of categories: ${numbers.length}`);

numbers.forEach(function (item) {
  const categoryName = item.firstElementChild.textContent;
  console.log(`Category: ${categoryName}`);

  const elementsNumber = item.lastElementChild.childElementCount;
  console.log(`Elements: ${elementsNumber}`);
});
