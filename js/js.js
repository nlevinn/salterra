
    var mySwiper = new Swiper(".slider_work", {
      spaceBetween: 72,
      slidesPerView: 2.2,
      centeredSlides: true,
      roundLengths: true,
      loop: true,
      loopAdditionalSlides: 30,
      navigation: {
        nextEl: ".swiper-work-next",
        prevEl: ".swiper-work-prev"
      },
      breakpoints :{
        998: {
          slidesPerView: 2.2,
        },
        768:{
          slidesPerView: 1.8,
          centeredSlides: true,
          loopAdditionalSlides: 1,
          centeredSlidesBounds: true,
          navigation: {
            nextEl: ".swiper-phone-next",
            prevEl: ".swiper-phone-prev"
          },
        },
        574:{
          slidesPerView: 1.5,
          centeredSlides: true,
          loopAdditionalSlides: 1,
          centeredSlidesBounds: true,
          navigation: {
            nextEl: ".swiper-phone-next",
            prevEl: ".swiper-phone-prev"
          },
        },
        425:{
          slidesPerView: "auto",
        },
        320:{
          slidesPerView: "auto",
        }
      },
    });
  

    
    var mySwiper = new Swiper(".slider__gallery", {
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 120,
      setWrapperSize: true,
      watchOverflow: true,
      centeredSlides: true,
      loopAdditionalSlides: 1,
      centeredSlidesBounds: true,
      breakpoints :{
        998: {
          slidesPerView: 'auto',
        },
        768:{
          slidesPerView: 'auto',
        },
        425:{
          slidesPerView: "auto",
        },
        320:{
          slidesPerView: "auto",
        }
      },
      navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
      },
    });

    var mySwiper = new Swiper(".main__wrapper", 
    {
        slidesPerView: 'auto',
        spaceBetween : 30,
        centeredSlides: true,
        loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      });

      document.addEventListener('DOMContentLoaded', () => {
        const width = window.innerWidth
        if (width < 1000){
          var mySwiper = new Swiper(".team_item", 
          {
            spaceBetween: 80,
            slidesPerView: 2.2,
            centeredSlides: true,
            roundLengths: true,
            watchOverflow: true,
            loop: true,
            loopAdditionalSlides: 30,
            navigation: {
              nextEl: ".swiper-team-next",
              prevEl: ".swiper-team-prev"
            },
            breakpoints :{
              998: {
                slidesPerView: "auto",
                spaceBetween: 10,
              },
              768:{
                slidesPerView: "auto",
                spaceBetween: 30,
              },
              425:{
                slidesPerView: "auto",
              },
              320:{
                slidesPerView: "auto",
                centeredSlides: true,
              }
            },
            });
        }
      })



      document.addEventListener('DOMContentLoaded', () => {
        const width = window.innerWidth
        if (width < 998){
          var mySwiper = new Swiper(".reviews_video", 
          {
            spaceBetween: 60,
            slidesPerView: 2.2,
            centeredSlides: true,
            roundLengths: true,
            loop: true,
            loopAdditionalSlides: 30,
            navigation: {
              nextEl: ".swiper-team-next",
              prevEl: ".swiper-team-prev"
            },
            breakpoints :{
              998: {
                slidesPerView: 2.2,
              },
              768:{
                slidesPerView: "auto",
              },
              425:{
                slidesPerView: "auto",
              },
              320:{
                slidesPerView: "auto",
              }
            },
            });
        }
      })
       

