var swiper = new Swiper(".heroSwiperPagination", {
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  speed: 1600,
});
var swiper2 = new Swiper(".heroSwiper", {
  speed: 1200,
  thumbs: {
    swiper: swiper,
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
