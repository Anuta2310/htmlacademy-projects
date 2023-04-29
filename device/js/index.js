// Catalog popover
const catalog_btn = document.querySelector('.catalog_btn');
const headerCatalog = document.querySelector('.header-catalog');

catalog_btn.addEventListener('click', catalogToggler);

function catalogToggler(){
  catalog_btn.classList.toggle('catalog_btn-open');
  headerCatalog.classList.toggle('header-catalog_closed');
};

// User Cart Popover

let userCart = document.querySelector('.user-cart');
let popoverCart = document.querySelector('.popover-cart');

userCart.addEventListener('click', toggleCart);

function toggleCart(){
  popoverCart.classList.toggle('popover-open');
}

// Tabs

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', () => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach((item) => {
        item.classList.remove('active');
      })

      tabsItems.forEach((item) => {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
};

document.querySelector('.tabs__nav-btn').click();

// Red Outline on Error

const modal_submitBtn = document.querySelector('.modal_submit-btn');
const modal_inputs = document.querySelectorAll('.modal_input');

modal_submitBtn.onclick = function(e){
  for (let modal_input of modal_inputs) {
    if (modal_input.value === ''){
      e.preventDefault();
      modal_input.classList.add('error');
    } else {
      modal_input.classList.remove('error');
    }
  }
}

// Modal Open / Close

const modal = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalOpen = document.querySelector('.modal-open');
modalCloseBtn.onclick = function(){
  modal.classList.add('close');
  for (let modal_input of modal_inputs) {
    modal_input.classList.remove('error');
    modal_input.value = modal_input.getAttribute('value');
  }
}
modalOpen.onclick = function(){
  modal.classList.remove('close');
}


