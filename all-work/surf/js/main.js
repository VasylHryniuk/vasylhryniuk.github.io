$(function () {
  $(".header-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    asNavFor: ".header-bottom__nav",
    speed: 700,
    fade: true,
    cssEase: "ease-in-ou",
  });

  $(".header-bottom__nav").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header-slider",
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".beach-slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1255,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 710,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $(".beach-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".p-2"),
    nextArrow: $(".n-2"),
    asNavFor: ".slider-map",
    responsive: [
      {
        breakpoint: 1255,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 560,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $(".travel-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".p-3"),
    nextArrow: $(".n-3"),
    speed: 700,
    fade: true,
    cssEase: "ease-in-ou",
    infinite: true,
  });

  $(".sleep-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".p-4"),
    nextArrow: $(".n-4"),
    speed: 700,
    fade: true,
    cssEase: "ease-in-ou",
    infinite: true,
  });

  $(".shop-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".p-5"),
    nextArrow: $(".n-5"),
    speed: 700,
    fade: true,
    cssEase: "ease-in-ou",
    infinite: true,
  });

  $('.btn-plus, .btn-minus').on('click', function(e) {
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.input-group').find('input');
    if (input.is('input')) {
      input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
  })
  

  $('.sleep-box__btn').on('click', function(){
    const parents = $(this).parents('.sleep-box');
     let summ = $('.price-value', parents).data('nigths') * $('.nigths', parents).val() + $('.price-value', parents).data('persons') * $('.persons', parents).val();
     $('.price-value', parents).html('$' + summ + ' USD ');
    });

    $('.quantity').each(function() {
      const parents = $(this).parents('.sleep-box');
      let summ = $('.price-value', parents).data('nigths') * $('.nigths', parents).val() + $('.price-value', parents).data('persons') * $('.persons', parents).val();
       $('.price-value', parents).html('$' + summ + ' USD ');
      });
   

});

const btns = document.querySelectorAll('.surfboard-item'),
      content = document.querySelector('.surfboard-item__content');

      btns.forEach(btn => {
        btn.addEventListener('click', () => {
         btn.classList.toggle('active')
      })
})  

const navToggle = () => {
  const toggles = document.querySelector('.menu-burger'),
  icons = document.querySelector('.hambergerIcon')
  menu = document.querySelector('.menu'),
  links = document.querySelectorAll('.menu__list li');
  toggles.addEventListener('click', () => {
    icons.classList.toggle('open');
      menu.classList.toggle('active');
      toggles.classList.toggle('active');
      links.forEach(i => {
          i.classList.toggle('fade');  
      })
  });
}
navToggle();

// SKROLL
const scrolling = (upSelector) => {
  const upElem = document.querySelector(upSelector);

  //Scrolling 

  let links = document.querySelectorAll('[href^="#"]'),
      speed = 0.2;

  links.forEach(link => {
      link.addEventListener('click', function (e) {
          event.preventDefault();

          let widthTop = document.documentElement.scrollTop,
              hash = this.hash,
              toBlock = document.querySelector(hash).getBoundingClientRect().top,
              start = null;

          requestAnimationFrame(step);

          function step(time) {
              if (start === null) {
                  start = time;
              }

              let progress = time - start,
                  r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock)
                      : Math.min(widthTop + progress / speed, widthTop + toBlock));

              document.documentElement.scrollTo(0, r);

              if (r != widthTop + toBlock) {
                  requestAnimationFrame(step);
              } else {
                  location.hash = hash;
              }
          }
      });
  });
};

scrolling();



AOS.init();