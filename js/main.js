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
      $('.filter').removeClass('open');
      $('footer ~ .newbuild__list').removeClass('open');
      $('.menu__item').removeClass('active');
    } else {
      $(this).addClass('open');
      $('.menu').slideDown(200);
    }
  });

  //Filter
  $('.menu__item--filter > a').on('click', function(e) {
    e.preventDefault();
    $('.menu__item').removeClass('active');
    $(this).parent().addClass('active');
    if ($('.filter').hasClass('open')) {
      $('.filter').removeClass('open');
    }
    setTimeout(function(){
      $('.filter').addClass('open');
    }, 100);
    const href = $(this).attr('href');
    $('.button--filter').prop('href', href);
    if(href === 'newbuild-grid.html') {
      $('.filter').addClass('filter--newbuild');
      $('footer ~ .newbuild__list').addClass('open');
    } else {
      $('.filter').removeClass('filter--newbuild');
      $('footer ~ .newbuild__list').removeClass('open');
    }
  });

  $('main').on('click', function() {
    $('footer ~ .newbuild__list').removeClass('open');
    $('.filter').removeClass('open');
    $('.menu__item--filter').removeClass('active');
  });

  $('.header__right').on('click', function() {
    $('footer ~ .newbuild__list').removeClass('open');
    $('.filter').removeClass('open');
    $('.menu__item--filter').removeClass('active');
  });

  $('.type__radio').on('click', function() {
    if($(this).is('#commers')) {
      $('.squere-radio').fadeOut();
      $('.jk').fadeOut();
    } else if($(this).is('#flat')){
      $('.squere-radio').fadeOut();
      $('.jk').fadeIn();
    } else {
      $('.squere-radio').fadeIn();
      $('.jk').fadeOut();
    }
  });

  if ($(window).width() <= 1180) {
     $('.menu__item--filter > a').on('click', function() {
      const href = $(this).attr('href');
      if ($('.filter').hasClass('open')) {
        $('.filter').removeClass('open');
      }
      setTimeout(function(){
        $('.filter').addClass('open');
      }, 100);
      if(href === 'newbuild-grid.html') {
        $('.mob-newbuild').fadeIn();
        if($('#filter-block').hasClass('active')) {
          $('.filter').addClass('open');
          $('footer ~ .newbuild__list').removeClass('open');
        } else {
          $('.filter').removeClass('open');
        }

        $('.filter__button').on('click', function(e) {
          e.preventDefault();
          $('.filter__button').removeClass('active');
          $(this).addClass('active');
          if($(this).is('#filter-block')) {
            $('footer ~ .newbuild__list').removeClass('open');
          } else {
            $('footer ~ .newbuild__list').addClass('open');
          }
        });
      } else {
        $('.mob-newbuild').fadeOut();
      }
     });
  }

  $('.card__tag').on('click', function(e) {
    e.preventDefault();
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
  $('.sort__view').on('click', function(e) {
    e.preventDefault();
    $('.sort__view').removeClass('active');
    $(this).addClass('active');
    if($(this).is('#column')) {
      if(!$('.page__catalog').hasClass('grid')) {
        $('.page__catalog').addClass('grid');
      }
    } else {
      $('.page__catalog').removeClass('grid');
    }
  });

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

    const src = $('.mySwiper .swiper-slide-active').children().attr('src');
    $('.card-item__slider-full').attr('src', src);

    $('.mySwiper .swiper-pagination').appendTo('.card-item__photo')

    $('.swiper-button-next').on("click",function(){
      const src = $('.mySwiper .swiper-slide-active').children().attr('src');
    $('.card-item__slider-full').attr('src', src);
    });

    $('.swiper-button-prev').on("click",function(){
      const src = $('.mySwiper .swiper-slide-active').children().attr('src');
    $('.card-item__slider-full').attr('src', src);
    });

    $('.mySwiper .swiper-slide').on("click", function() {
      $('.mySwiper .swiper-slide').removeClass('swiper-slide-active');
      $(this).addClass('swiper-slide-active');
      const src = $(this).children().attr('src');
      $('.card-item__slider-full').attr('src', src);
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

  //Vacancies
  $(".gotoform a").on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
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
