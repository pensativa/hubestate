(function($) {
  //Menu
  $('#menu__toggle').on('click', function() {
    if ($('#left-menu__toggle').hasClass('open')) {
      $('#left-menu__toggle').removeClass('open');
      $('.menu').slideUp(200);
    }
    if ($('.header__right').hasClass('open')) {
      $('.header__right').removeClass('open');
      $('.close-menu').removeAttr('style');
    } else {
      $('.header__right').addClass('open');
      $('.close-menu').slideDown(200);
    }
  });

  $('#left-menu__toggle').on('click', function() {
    if ($('.header__right').hasClass('open')) {
      $('.header__right').removeClass('open');
      $('.close-menu').removeAttr('style');
    }
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('.menu').slideUp(200);
      $('.filter').slideUp(200);
    } else {
      $(this).addClass('open');
      $('.menu').slideDown(200);
      $('.filter').slideDown(200);
    }
  });

  //Languige change
    $('.menu__lang-item').on('click', function() {
      $('.menu__lang-item').removeClass('active')
      $(this).addClass('active');
    });

  //Popaps
  $('.button--see').on('click', function(e) {
    e.preventDefault();
    $('.popap__see').slideDown(200);
  });

  $('.popap__close').on('click', function(e) {
    e.preventDefault();
    $('.popap').slideUp(200);
  });

  $('.popap-callback').on('click', function(e) {
    e.preventDefault();
    $('.popap__callback').slideDown(200);
  });

  $('.button--download').on('click', function(e) {
    e.preventDefault();
    $('.popap--download').slideDown(200);
  });

  //Catalog grid

  if ($(window).width() <= 850) {
    $('.card-new__gallery').appendTo('.card-new__text');
    $(function() {
      if (!$('.page__catalog').hasClass('grid')) {
        $('.page__catalog').addClass('grid');
      }
    });
  }

  $(window).resize(function() {
    if ($(window).width() <= 850) {
      $('.card-new__gallery').appendTo('.card-new__text');
      $(function() {
        if (!$('.page__catalog').hasClass('grid')) {
          $('.page__catalog').addClass('grid');
        }
      });
    }
  });

  //Download files
  $('.file').change(function() {
    if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
    else $(this).prev().text('ПРИКРЕПИТЬ ФАЙЛ');
  });

  // FAQ Accordion
  $(".faq__link").on("click", function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $(".faq__link").removeClass('open');
      $(this).addClass('open');
    }
    $(".faq__detail:visible").slideUp();
    if (!$(this).next().is(":visible")) {
      $(this).next().slideDown(200);
    }
  });

  //Filters
  $( "#slider-range" ).slider({
      range: true,
      min: 2000,
      max: 500000,
      values: [ 40000, 113000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );

    $( "#slider-range2" ).slider({
      range: true,
      min: 25,
      max: 600,
      values: [ 125, 500 ],
      slide: function( event, ui ) {
        $( "#squere" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#squere" ).val( "$" + $( "#slider-range2" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );

    //Sliders
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 'auto',
      spaceBetween: 10,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });

    var newswiper = new Swiper(".newSwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });

  // Phone Mask
    $('#phone').mask('+38 (000) 000 0000', {
      'translation': {
        0: {
          pattern: /[0-9+]/
        }
      }
    });
    $('#userphone').mask('+38 (000) 000 0000', {
      'translation': {
        0: {
          pattern: /[0-9+]/
        }
      }
    });
    $('#phone-ser').mask('+38 (000) 000 0000', {
      'translation': {
        0: {
          pattern: /[0-9+]/
        }
      }
    });
    $('#ownerphone').mask('+38 (000) 000 0000', {
      'translation': {
        0: {
          pattern: /[0-9+]/
        }
      }
    });
    $('#vacphone').mask('+38 (000) 000 0000', {
      'translation': {
        0: {
          pattern: /[0-9+]/
        }
      }
    });
    $('#contacts-phone').mask('+38 (000) 000 0000', {
      'translation': {
        0: {
          pattern: /[0-9+]/
        }
      }
    });
    $('#see-phone').mask('+38 (000) 000 0000', {
      'translation': {
        0: {
          pattern: /[0-9+]/
        }
      }
    });

}(jQuery));
