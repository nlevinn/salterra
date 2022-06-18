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



    document.addEventListener('DOMContentLoaded', function() {

        const selector = '.we_button';
        const elems = Array.from(document.querySelectorAll(selector));
        const navigation = document.querySelector('.we_button_items');
  
        function makeActive(evt) {
          const target = evt.target;
  
           if (!target || !target.matches(selector)) {
             return;
           }
  
          elems.forEach(elem => elem.classList.remove('we_button_active'));
          evt.target.classList.add('we_button_active');
        };
  
        navigation.addEventListener('mousedown', makeActive);
  
      });


      window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tell'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });


let overlay = document.querySelector('.overlay');
let wrapper__form = document.querySelector('.wrapper__form');
let openPopupButtons = document.querySelectorAll('.play-video_about'); 

openPopupButtons.forEach((button) => {wrapper__form
  button.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.add('overlay_active');
      wrapper__form.classList.add('wrapper__form-active');
  })
});

function closeModal() {
  document.getElementById('.overlay').style.display = "none";
  
}

document.addEventListener('click', (e) => {
  if(e.target === overlay) {
    document.getElementById("youVideoId").pause();
    overlay.classList.remove('overlay_active');
      popup.classList.remove('wrapper__form-active');
      
  }
});

var x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("nav");
  element.classList.toggle("open");
  
  x.classList.toggle("change");
}




