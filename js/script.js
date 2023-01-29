var swiper = new Swiper(".slide-content", {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
});

var swiper = new Swiper(".testimoni", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// kode stiky navbar
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 0);
});

// gsap
gsap.from(".main-image", { duration: 1.8, x: "100%", opacity: 0 });
gsap.from(".main-caption", { duration: 2, x: "-100%", opacity: 0 });
gsap.from(".navbar", { duration: 1.5, y: "-100%", opacity: 0 });
