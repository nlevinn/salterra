
    var mySwiper = new Swiper(".slider_work", {
      spaceBetween: 72,
      slidesPerView: 2.2,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
      loopAdditionalSlides: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  

    
    var mySwiper = new Swiper(".slider__gallery", {
      loop: true,
      paginationClickable: true,
      centeredSlides: true,
      slidesPerView: '2.5',
      spaceBetween : 50,
      autoHeight: true,
      cssWidthAndHeight: true,
      autoResize: false,
      breakpoints :{
        768:{
          spaceBetweenSlides: 10
        }
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
      },
    });




  