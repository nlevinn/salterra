var swiper = new Swiper('.swiper', {
    spaceBetween: 24,
    navigation: { // задаем кнопки навигации
		nextEl: '.slider-button-next', // кнопка Next
		prevEl: '.slider-button-prev' // кнопка Prev
	},
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type : 'custom',
        bulletClass:'button_slide__items'
      },
    
  });
