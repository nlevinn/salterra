
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
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween : 60,
      initialSlide: 3,

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




  