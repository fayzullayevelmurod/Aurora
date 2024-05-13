// hero swiper
var swiper = new Swiper(".hero__swiper", {
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 600,
});

// product__swiper
var swiper = new Swiper(".product__swiper", {
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  loop: true,
  slidesPerView: 4,
  spaceBetween: 32,
  speed: 600,
});

// watche__product-swiper
var swiper = new Swiper(".watche__product-swiper", {
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  loop: true,
  slidesPerView: 6,
  spaceBetween: 24,
  speed: 600,
});