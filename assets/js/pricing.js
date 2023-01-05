var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});