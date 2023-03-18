// Catalog popover
const catalog_btn = document.querySelector('.catalog_btn');
const headerCatalog = document.querySelector('.header-catalog');

catalog_btn.addEventListener('click', catalogToggler);

function catalogToggler(){
  catalog_btn.classList.toggle('catalog_btn-open');
  headerCatalog.classList.toggle('header-catalog_closed');
};

