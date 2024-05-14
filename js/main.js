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
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
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
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    744: {
      slidesPerView: 2,
      spaceBetween: 24,
      loop: false,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    },
  },
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

// tab__content
const tabContent = document.querySelectorAll(".tab__content");
const tabItems = document.querySelectorAll(".tab__item");
const companyName = document.querySelectorAll(".company__name");
const logo = document.querySelectorAll(".aurora__logo");
const historyBg = document.querySelectorAll(".history__brand-bg");

function hideTabContent() {
  tabContent.forEach((content) => content.classList.remove("show"));
  tabItems.forEach((item) => item.classList.remove("active"));
  companyName.forEach((name) => name.classList.remove("show"));
  logo.forEach((el) => el.classList.remove("show"));
  historyBg.forEach((img) => img.classList.remove("show"));
}

function showTabContent(idx = 0) {
  tabItems[idx].classList.add("active");
  tabContent[idx].classList.add("show");
  logo[idx].classList.add("show");
  companyName[idx].classList.add("show");
  historyBg[idx].classList.add("show");
}

hideTabContent();
showTabContent(0);

tabItems.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    hideTabContent();
    showTabContent(idx);
  });
});
