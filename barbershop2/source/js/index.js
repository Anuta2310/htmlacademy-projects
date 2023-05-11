// Mobile Menu
const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');
mainNavToggle.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--open');
  mainNav.classList.toggle('main-nav--closed');
});
