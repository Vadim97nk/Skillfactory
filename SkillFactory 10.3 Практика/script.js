let button = document.querySelector(".btn");
let icon1 = document.querySelector(".btn__icon");
let icon2 = document.querySelector(".btn__icon2");

button.addEventListener('click', () => {
  icon1.classList.toggle('close');
  icon2.classList.toggle('close');
});