var full_banner_pagination = new Swiper(".full_banner_pagination", {
  direction: "vertical",
  spaceBetween: 30,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var full_banner_swiper = new Swiper(".full_banner_swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: full_banner_pagination,
  },
  speed: 1600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
