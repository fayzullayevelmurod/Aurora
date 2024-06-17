// hero swiper
var swiper = new Swiper(".hero__swiper", {
  navigation: {
    nextEl: ".button-next1",
    prevEl: ".button-prev1",
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
    nextEl: ".button-next2",
    prevEl: ".button-prev2",
  },
  loop: true,
  slidesPerView: 4,
  spaceBetween: 32,
  speed: 600,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    744: {
      slidesPerView: 2,
      spaceBetween: 24,
      loop: false,
      navigation: {
        nextEl: ".button-next4",
        prevEl: ".button-prev4",
      },
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 32,
      navigation: {
        nextEl: ".button-next4",
        prevEl: ".button-prev4",
      },
    },
  },
});

// watche__product-swiper
var swiper = new Swiper(".watche__product-swiper", {
  navigation: {
    nextEl: ".button-next3",
    prevEl: ".button-prev3",
  },
  loop: true,
  slidesPerView: 6,
  spaceBetween: 24,
  speed: 600,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    1360: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
    1181: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1180: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    761: {
      slidesPerView: 3,
      spaceBetween: 24,
      loop: false,
      allowTouchMove: true,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 24,
      loop: false,
      allowTouchMove: true,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: false,
      allowTouchMove: true,
    },
  },
});

// products__swiper
var swiper = new Swiper(".products__swiper", {
  navigation: {
    nextEl: ".button-next7",
    prevEl: ".button-prev7",
  },
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,
  speed: 600,
  allowTouchMove: false,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    1547: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1167: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    744: {
      slidesPerView: 1.8,
      spaceBetween: 24,
      loop: false,
      allowTouchMove: true,
    },
    0: {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 24,
    },
  },
});

// card__swiper
var swiper = new Swiper(".card__swiper", {
  navigation: {
    nextEl: ".button-next1",
    prevEl: ".button-prev1",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 600,
});

// tab__content
try {
  const tabContent = document.querySelectorAll(".tab__content");
  const tabItems = document.querySelectorAll(".tab__item");
  const companyName = document.querySelectorAll(".company__name");
  const logo = document.querySelectorAll(".aurora__logo");
  const historyBg = document.querySelectorAll(".history__brand-bg");

  function hideTabContent() {
    tabContent.forEach((content) => content.classList.remove("show"));
    tabItems.forEach((item) => item.classList.remove("active"));
    try {
      if (companyName) {
        companyName.forEach((name) => name.classList.remove("show"));
        logo.forEach((el) => el.classList.remove("show"));
        historyBg.forEach((img) => img.classList.remove("show"));
      }
    } catch (error) {}
  }

  function showTabContent(idx = 0) {
    tabItems[idx].classList.add("active");
    tabContent[idx].classList.add("show");
    try {
      if (companyName) {
        logo[idx].classList.add("show");
        companyName[idx].classList.add("show");
        historyBg[idx].classList.add("show");
      }
    } catch (error) {}
  }

  hideTabContent();
  showTabContent(0);

  tabItems.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      hideTabContent();
      showTabContent(idx);
    });
  });
} catch (error) {}

// accordion
const accordion = document.querySelectorAll(".accordion");
accordion.forEach((item) => {
  const accordionHeader = item.querySelector(".accordion__header");
  const accordionContent = item.querySelector(".accordion__content");

  accordionHeader.addEventListener("click", () => {
    accordionHeader.classList.toggle("active");
    accordionContent.classList.toggle("show");
  });
});

// media header
const mediaHeader = document.querySelector(".meida__header");
const openMediaHeaderBtn = document.querySelector(".open__media-header-btn");
const closeMediaHeaderBtn = document.querySelector(".close__media-header-btn");

openMediaHeaderBtn.addEventListener("click", () => {
  mediaHeader.classList.add("show");
  document.body.style.overflow = "hidden";
});
closeMediaHeaderBtn.addEventListener("click", () => {
  mediaHeader.classList.remove("show");
  document.body.style.overflow = "";
});

try {
  const showMoreNewsBtn = document.querySelector(".show__more-btn");
  const newsCards = document.querySelectorAll(".news__card");

  showMoreNewsBtn.addEventListener("click", () => {
    newsCards.forEach((card) => {
      card.classList.remove("hide");
    });
  });

  window.addEventListener("resize", handleResize);
  window.addEventListener("load", handleResize);

  function handleResize() {
    const shouldHide = window.innerWidth <= 1024;

    newsCards.forEach((card, index) => {
      if (shouldHide) {
        if (index >= 4) {
          card.classList.add("hide");
        } else {
          card.classList.remove("hide");
        }
      } else {
        if (index >= 6) {
          card.classList.add("hide");
        } else {
          card.classList.remove("hide");
        }
      }
    });
  }

  // Initial call to handleResize to set up the state correctly on load
  handleResize();
} catch (error) {}

// check__box
try {
  document.querySelectorAll(".check__box").forEach((box) => {
    box.addEventListener("click", () => {
      box.classList.toggle("active");
    });
  });
} catch (error) {}

try {
  var swiper = new Swiper(".news__inner-swiper2", {
    loop: true,
    spaceBetween: 32,
    slidesPerView: 5,
    freeMode: true,
    speed: 600,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".news__inner-swiper", {
    // loop: true,
    spaceBetween: 32,
    slidesPerView: 1.5,
    speed: 600,
    navigation: {
      nextEl: ".button-next1",
      prevEl: ".button-prev1",
    },
    thumbs: {
      swiper: swiper,
    },
    breakpoints: {
      1024: {
        spaceBetween: 32,
        slidesPerView: 1.5,
      },
      744: {
        spaceBetween: 0,
        slidesPerView: 2,
      },
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
    },
  });
} catch (error) {}
