var brandsSwiper = new Swiper(".brandsSwiper", {
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
  breakpoints: {
    580: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 200,
    },
  },
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  freemode: true,
  speed: 10000,
});
