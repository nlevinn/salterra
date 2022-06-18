
    var mySwiper = new Swiper(".hint", 
    {
        slidesPerView: '1',
      loop: true,
      setWrapperSize: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
      },
            breakpoints :{
        998: {
          spaceBetween : false,
        },
        768:{
          spaceBetween : 20,
          setWrapperSize: false,
        },
        425:{
          spaceBetween : 20,
          setWrapperSize: false,
        },
        320:{
          spaceBetween : 20,
          setWrapperSize: false,
        }
      },
      });