// Theme Switcher

const themeButtonDark = document.querySelector('.theme-button-dark');
const themeButtonLight = document.querySelector('.theme-button-light');

themeButtonDark.onclick = function(){
  themeButtonDark.classList.add('active');
  themeButtonLight.classList.remove('active');
  document.body.classList.add('dark');
};

themeButtonLight.onclick = function(){
  themeButtonLight.classList.add('active');
  themeButtonDark.classList.remove('active');
  document.body.classList.remove('dark');
};

// Font Switcher

const fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
const fontButtonSerif = document.querySelector('.font-button-serif');

fontButtonSansSerif.onclick = function(){
  document.body.classList.remove('serif');
  fontButtonSansSerif.classList.add('active');
  fontButtonSerif.classList.remove('active');
};
fontButtonSerif.onclick = function(){
  document.body.classList.add('serif');
  fontButtonSerif.classList.add('active');
  fontButtonSansSerif.classList.remove('active');
};

// Short and Long Articles

const blogArticles = document.querySelectorAll('.blog-article.short')

for (let blogArticle of blogArticles){
  const moreBtn = blogArticle.querySelector('.more');
  moreBtn.onclick = function(){
    blogArticle.classList.remove('short');
  };
};

// Grid and List Layouts

const cardViewButtonGrid = document.querySelector('.card-view-button-grid');
const cardViewButtonList = document.querySelector('.card-view-button-list');
const cards = document.querySelector('.cards');

cardViewButtonGrid.onclick = function(){
  cardViewButtonGrid.classList.add('active');
  cardViewButtonList.classList.remove('active');
  cards.classList.remove('list');
};

cardViewButtonList.onclick = function(){
  cardViewButtonList.classList.add('active');
  cardViewButtonGrid.classList.remove('active');
  cards.classList.add('list');
};

// Gallery

const previews = document.querySelectorAll('.preview-list a');
let currentImg = document.querySelector('.active-item');
const activePhoto = document.querySelector('.active-photo');

for (let activeImg of previews){
  activeImg.onclick = function(evt){
    evt.preventDefault();
    let currentImg = document.querySelector('.active-item');
    activeImg.classList.add('active-item');
    currentImg.classList.remove('active-item');
    activePhoto.src = activeImg.href;
  };
};