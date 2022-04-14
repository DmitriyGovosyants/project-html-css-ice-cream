$(document).keydown(function (event) { 
    const modalBuy = document.querySelector('.js-modal-buy');
    const modalFranchise = document.querySelector('.js-modal-franchise');
    const modalLocation = document.querySelector('.js-modal-location');
    const modalAbout = document.querySelector('.js-modal-about');
            
  if (event.keyCode == 27) {
    document.body.classList.remove('modal-open');
    modalBuy.classList.add('backdrop--hidden');
    modalFranchise.classList.add('backdrop--hidden');
    modalLocation.classList.add('backdrop--hidden');
    modalAbout.classList.add('backdrop--hidden');
    document.querySelector(".video-setup").pause();
  }
});
