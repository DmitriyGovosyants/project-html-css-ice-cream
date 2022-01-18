(() => {
  const refs = {
    submitBtn: document.querySelector('[data-modal-submit]'),
    modal: document.querySelector('[data-modal-buy]'),
  };

  refs.submitBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('modal--hidden');
    }
    // задержка после первого клика по Buy-now (сейчас стоит 5 секунд) - 
    // в идеале эту задержку нужно  поставить именно на кнопку отправить
    setTimeout(function(){
	document.querySelector('[data-modal-buy]').classList.toggle('backdrop--hidden');
}, 5000);
})();

