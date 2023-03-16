// Cart Popover

const cartBtn = document.querySelector('.cart-btn');
const popoverCart = document.querySelector('.popover-cart');
const popoverCloseBtn = document.querySelector('.popover-close-btn');

cartBtn.onclick = function(){
  popoverCart.classList.add('popover-open');
}
popoverCloseBtn.onclick = function(){
  popoverCart.classList.remove('popover-open');
}

// Auth Form Modal

const loginBtn = document.querySelector('.nav-link-login');
const loginCloseBtn = document.querySelector('.modal-close-btn');
const loginModal = document.querySelector('.modal-container');


loginBtn.onclick = function(){
  loginModal.classList.remove('modal-close');
}
loginCloseBtn.onclick = function(){
  loginModal.classList.add('modal-close');
}