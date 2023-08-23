$(() => {
    $('.header-desctop-lang-wrap').click(function(){
      $('.header-desctop-lang-content').toggleClass('active');
    });
    $('.header-desctop-lang-wrap .popout-list__option').click(function(){
      let langValue = $(this).attr('lang');
      $('[data-code="'+langValue+'"]').trigger('click');
      $('.transcy-btn-apply .btn-apply').trigger('click');
    });

    $(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".header-desctop-lang-wrap" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			$('.header-desctop-lang-content').toggleClass('active');
		}
	});
    const swiper = new Swiper('.swiper-testimonial', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 40,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
        spaceBetween: 12
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        spaceBetween: 12,
            scrollbar: {
              el: '.swiper-scrollbar',
            },
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 2.2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2.5,
        
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 40
      }
      
    }

  });
});

$(() => {
    const swiper = new Swiper('.insta-swiper', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 40,
    scrollbar: {
              el: '.swiper-scrollbar',
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
        spaceBetween: 12
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        spaceBetween: 12,
            scrollbar: {
              el: '.swiper-scrollbar',
            },
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 2.2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2.5,
        
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 40
      }
      
    }

  });
});

$(() => {
    const swiper = new Swiper('.how-use-swiper', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 40,
    scrollbar: {
              el: '.swiper-scrollbar',
    },
    breakpoints: {
      10: {
        slidesPerView: 1,
        spaceBetween: 12
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        spaceBetween: 12,
            scrollbar: {
              el: '.swiper-scrollbar',
            },
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 2.2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2.5,
        
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 40
      }
      
    }

  });
});

$(() => {
    const swiper = new Swiper('.my-mobile-swiper-product-media', {
    loop: false,
    slidesPerView: 1.2,
    spaceBetween: 20,
    scrollbar: {
              el: '.swiper-scrollbar',
    }
  });
});