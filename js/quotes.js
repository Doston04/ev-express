var swiper = new Swiper(".quotesSwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: "#quoteNext",
    prevEl: "#quotePrev",
  },
  speed: 1600,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
});
