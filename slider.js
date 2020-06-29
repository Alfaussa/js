const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemsList);
const  item = document.querySelectorAll(".item");

console.log(item);

const minRight = 0;  
const preShownItems = 300 / step;
const maxRight = (items.length - preShownItems) * step;
const step = 100;
let currentRight = 0;

itemsList.style.right = currentRight;

right.addEventListener("click", e => {
  e.preventDefault();

  if (currentRight < maxRight) {
    currentRight += step;
    itemsList.style.right = `${currentRight}px`
  }
})



left.addEventListener("click", e => {
  e.preventDefault();

  if (currentRight < minRight) {
    currentRight -= step;
    itemsList.style.right = `${currentRight}px`
  }
})