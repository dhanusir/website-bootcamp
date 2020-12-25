// const navbar = document.getElementByClass('navbar');  if you have id='navbar' in nav
const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function() {
  if(window.pageYOffset > 100) {
    navbar.classList.remove('top');

    if(!scrolled) {
      navbar.style.transform = 'translateY(-60px)';
      scrolled = true;

      setTimeout(function() {
        navbar.style.transform = 'translateY(0)';
      }, 200);
    }
  } else {
    navbar.classList.add('top');
  }
}
