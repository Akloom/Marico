let hamburger = document.querySelector('.hamburger-menu');
let navCollapse = document.querySelector('.header-nav__collapse');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  navCollapse.classList.toggle('is-active');
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName(".header-nav__dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

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