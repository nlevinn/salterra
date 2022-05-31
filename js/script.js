

	swiperTabsNav = new Swiper('.swiper-tabs-nav', {
        spaceBetween: 0,
        slidesPerView: 'auto',
        loop: false,
        loopedSlides: 5,
        autoHeight: false,
        resistanceRatio: 0,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        setWrapperSize: true,
    });

    // Swiper Content
    swiperTabsContent = new Swiper('.swiper-tabs-content', {
        spaceBetween: 30,
        loop:true,
        autoHeight: true,
        longSwipes: true,
        resistanceRatio: 0, 
        watchOverflow: true,
        loopedSlides: 5,
        thumbs: {
            swiper: swiperTabsNav,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });


