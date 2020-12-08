$(function () {

  $('.rocks-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });


  $('.team-slider').slick({
    slidesToShow: 3,
    prevArrow: '<a class="slick-prev slick-arrow" href="#"><img src="img/arrow-left.svg" alt=""></a>',
    nextArrow: '<a class="slick-next slick-arrow" href="#"><img src="img/arrow-right.svg" alt=""></a>',
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    speed: 600,
    dots: true,
    responsive: [{
        breakpoint: 1030,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 920,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 2,

        }

      },

      {
        breakpoint: 630,
        settings: {
          dots: false,
          arrows: true,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1,

        }
      },

      {
        breakpoint: 410,
        settings: {
          dots: false,
          arrows: true,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1,

        }
      }

    ]
  });


  $('.footer-lang').on('click', function () {
    $('.footer-lang__switch').slideToggle('active');

  });

  $('.burger-wrapper').on('click', function () {
    $('.class__list').slideToggle();
  });

  document.querySelector('.burger-wrapper').onclick = function () {
    let burger = document.querySelector('.burger').classList.toggle('burger-active')
    let menu = document.querySelector('.class__list').classList.toggle('menu-active')
  }

  let header = $("#header");
  let content = $("#content");
  let contentH = content.innerHeight();
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");

  checkScroll(scrollPos,  contentH);

  $(window).on("scroll resize", function() {
    contentH = content.innerHeight();
    scrollPos = $(this).scrollTop();
    
    checkScroll(scrollPos,  contentH);

  });

  function checkScroll(scrollPos, contentH) {
    if( scrollPos >  contentH ) {
      header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }

  }


  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");
  

    $("html, body").animate({
      scrollTop: elementOffset - 70

    }), 700;
  });

});