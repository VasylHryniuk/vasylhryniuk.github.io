$(function(){
    $('.content-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      });

      $('#navToggle').on('click', function () {
        $(this).toggleClass("active");
        $('.list__style').slideToggle();
      });
});

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  //Tabs
  
  const tabs = (headerSelector, tabSelector, contentSeclector, activeClass, display = 'flex') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSeclector);
           
    function hideTabContent() { 
       content.forEach(item => { 
        item.style.display= 'none';
       }); 

       tab.forEach(item => { 
        item.classList.remove(activeClass);
       });
    };
    
    function showTabContent(i = 0 ) { 
        content[i].style.display = display;
        tab[i].classList.add(activeClass); 
    };

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => { 
      e.preventDefault();
        const target = e.target; 
        if( target &&
            (target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) ) { 
            tab.forEach((item, i) => { 
                if(target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i); 
                }
            });
        }
    });
};

const scrolling = (upSelector) => {
  const upElem = document.querySelector(upSelector);

  //Scrolling 

  let links = document.querySelectorAll('[href^="#"]'), 
              speed = 0.3;
  
  links.forEach(link => {
      link.addEventListener('click', function(e) {
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
              r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock)
              : Math.min(widthTop + progress/speed, widthTop + toBlock)); 
      
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

tabs('.servies-nav', '.servies-nav__block', '.servies-content', 'active');
scrolling();

});