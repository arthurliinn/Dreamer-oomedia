//slider1
var swiper = new Swiper('.swiper1', {
  // cssMode: true,
  direction: 'vertical',
  loop: true,
  init: true,
  slidesPerView: 1,
  spaceBetween: 500,
  simulateTouch: true,
  centeredSlides: true,
  mousewheel: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 500
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 500
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 500  
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 500
    },
    1024:{
      slidesPerView: 1,
      spaceBetween: 500
    }
  },
  mousewheel: true,
  keyboard: true,
});


//slider2


var swiper = new Swiper('.swiper2', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 4,
  loop: true,
  speed:1500,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination2',
    type: 'fraction',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 480px
    480: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 30  
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1024:{
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
});