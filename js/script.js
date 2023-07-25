// categories
const button1 = document.querySelector(".btn-group button");
const button2 = document.querySelector("#burron2");
const button3 = document.querySelector("#burron3");
const ul1 = document.querySelector(".dropdown-menus");
const ul2 = document.querySelector(".dropdown-menus2");
const ul3 = document.querySelector(".dropdown-menus3");

button1.addEventListener("click", function () {
  ul1.classList.toggle("views");
});
button2.addEventListener("click", function () {
  ul2.classList.toggle("views");
});

button3.addEventListener("click", function () {
    ul3.classList.toggle("views");
  });

// categories
