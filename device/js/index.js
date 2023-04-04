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
