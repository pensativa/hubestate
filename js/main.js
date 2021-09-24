(function($) {
  //Menu
  $('#menu__toggle').on('click', function() {
    if ($('.header__right').hasClass('open')) {
      $('.header__right').removeClass('open');
      $('.close-menu').removeAttr('style');
    } else {
      $('.header__right').addClass('open');
      $('.close-menu').slideDown(200);
    }
  });

  $('#left-menu__toggle').on('click', function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
  });

  //Languige change
    $('.menu__lang-item').on('click', function() {
      $('.menu__lang-item').removeClass('active')
      $(this).addClass('active');
    });

  //Popap
  $('.popap-callback').on('click', function(e) {
    e.preventDefault();
    $('.popap__callback').slideDown(200);
  });

  $('.popap__close').on('click', function(e) {
    e.preventDefault();
    $('.popap').slideUp(200);
  });

  // FAQ Accordion
  $(".faq__link").on("click", function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open')
    } else {
      $(this).addClass('open')
    }
    $(".faq__detail:visible").slideUp();
    if (!$(this).next().is(":visible")) {
      $(this).next().slideDown(200);
    }
  });

  $(".faq__link--next").on("click", function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open')
    } else {
      $(this).addClass('open')
    }
    $(".faq__detail--next:visible").slideUp();
    if (!$(this).next().is(":visible")) {
      $(this).next().slideDown(200);
    }
  });

  //To top

  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
        $('#to-top').fadeIn();
      } else {
        $('#to-top').fadeOut();
      }
    });
    $('#to-top').click(function() {
      $('body, html').animate({scrollTop:0},800);
    });
  });

  //Tabs
  $('.tabs-wrapper').each(function() {
    let ths = $(this);
    ths.find('.tab-item').not(':first').hide();
    ths.find('.tab').click(function(e) {
      e.preventDefault();
      ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  $('.tabs-wrapper--report').each(function() {
    let ths = $(this);
    ths.find('.tab-item--report').not(':first').hide();
    ths.find('.tab--report').click(function(e) {
      e.preventDefault();
      ths.find('.tab--report').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.tab-item--report').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });

  $('.popap-menu__item').on('click', function() {
    $('.popap-menu__item').removeClass('active');
    $(this).addClass('active');
    const loc = window.location.hash;
    if (loc != "") {
      const href = loc;
      const target = $('.tab').find(href);
      $('.tab').removeClass('active');
      $('.tab[href="'+href  +'"]').addClass('active');
      $('.tab-item').hide();
      $(href).fadeIn();
      if ($('.tab').hasClass('report-tab') && $(this).hasClass('active')) {
        $(".results").addClass('open');
      } else {
        $(".results").removeClass('open');
      }
    }
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


}(jQuery));
