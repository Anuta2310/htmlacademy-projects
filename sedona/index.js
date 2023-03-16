const newsletterBtn = document.querySelector('.newsletter-btn');
const inputEmail = document.getElementById('newsletter-email');

newsletterBtn.onclick = function(e){
  if (inputEmail.value === ''){
    e.preventDefault();
    inputEmail.classList.add('error');
  }
};
