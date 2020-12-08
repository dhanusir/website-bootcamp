var swiper = new Swiper('.slider-hero', {
  loop: true,
  speed: 600,
  autoplay: {
    delay: 10000
  },
  effect: 'fade',
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
});
