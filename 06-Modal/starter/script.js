'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // node list of all selected objects, array-like

const closeModal = function () {
  modal.classList.add('hidden'); // removing and adding classes is standard procedure
  overlay.classList.add('hidden');
};

const showModal = function () {
  modal.classList.remove('hidden'); // . is only for selecting classes, hence no .
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal); // no () as function is not called
overlay.addEventListener('click', closeModal); // function is called by JS when click happens

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

// when an event happens, JS creates an event object containing all information = e
//          KeyboardEvent {isTrusted: true, key: 'Escape', code: 'Escape', location: 0, ctrlKey: false, …}

// keyup = lift finger off the keyboard
// keypress = continiously while keeping button pressed
// keydown = when pushing button down
