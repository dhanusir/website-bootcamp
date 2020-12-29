'use strict'; // use strict mode for better JS code

// select the elements

// select modal as element with class .modal
const modal = document.querySelector('.modal');
// select overlay as element with class .overlay
// select btnOpenModal as element with class .show
// select btnCloseModal as element with class .close

// define the functions
const openModal = function () {
  // remove 'hidden' class to existing classList of modal
  // remove 'hidden' class to existing classList of overlay
};
const closeModal = function () {
  // add 'hidden' class to existing classList of modal
  // add 'hidden' class to existing classList of overlay
};

// define listener for btnOpenModal on click event and invoke openModal
// define listener for btnCloseModal on click event and invoke closeModal
// define listener for overlay on click event and invoke closeModal

// handle escape key event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
