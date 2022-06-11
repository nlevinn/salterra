
    var mySwiper = new Swiper(".hint", 
    {
        slidesPerView: '1',
      loop: true,
      setWrapperSize: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
            breakpoints :{
        998: {
          spaceBetween : 20,
        },
        768:{
          spaceBetween : 20,
        },
        425:{
          spaceBetween : 20,
        },
        320:{
          spaceBetween : 20,
        }
      },
      });

  




