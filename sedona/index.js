// Red Outline on Error
const newsletterBtn = document.querySelector('.newsletter-btn');
const inputEmail = document.getElementById('newsletter-email');

newsletterBtn.onclick = function(e){
  if (inputEmail.value === ''){
    e.preventDefault();
    inputEmail.classList.add('error');
  }
};

// Modal Open / Close
const modal = document.querySelector('.modal-container');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalOpenBtns = document.querySelectorAll('.modal-open-btn');
modalCloseBtn.onclick = function(){
  modal.classList.add('close');
}
for (let modalOpenBtn of modalOpenBtns) {
  modalOpenBtn.onclick = function(){
    modal.classList.remove('close');
  }
}

