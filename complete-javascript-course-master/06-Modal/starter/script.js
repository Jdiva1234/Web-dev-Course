'use strict';

const btnsShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal ');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

let closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' || e.key === 'Space') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
  //   console.log(e);
});
