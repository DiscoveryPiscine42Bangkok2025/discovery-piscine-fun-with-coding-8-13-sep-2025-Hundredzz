const nav = document.getElementsByClassName('nav');
const menuList = document.getElementsByClassName('menu');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

nav[0].addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.classList.toggle('active');
});

Array.from(menuList).forEach(element => {
    element.addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.classList.toggle('active');
});
});