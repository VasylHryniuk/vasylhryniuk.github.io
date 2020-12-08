window.addEventListener("DOMContentLoaded", () => {
    "use srtict";
  
    const overlayBody = () => {
      const wrapper = document.querySelector(".wrapper-all");
      wrapper.style.opacity = "1";
    };
    overlayBody();
  
    const box = document.querySelectorAll(".works-box");
    const btn = document.querySelectorAll(".btn");
  
    for (let i = 0; i < box.length; i++) {
      box[i].addEventListener("click", () => {
        if (box[i].classList.contains("wb-active")) {
          box[i].classList.remove("wb-active");
        } else {
          box[i].classList.add("wb-active");
        }
      });
      for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
          if (!box[i].classList.toggle("wb-active")) {
            box[i].classList.toggle("wb-active");
          }
        });
      }
    }
  
    setTimeout(() => {
      document.getElementById("video").play();
    }, 2500);

  // tabs 
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
  tabs('.gallery-nav', '.gallery-nav__block', '.gallery-wrapper', 'active');
  
  });
  
  new TypeIt("#printText", {
    speed: 150,
    waitUntilVisible: true,
  }).go();
  

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".animate-hero", {
    duration: 1.5,
    opacity: 0.1,
    x: -150,
    stagger: 0.3
  })

  gsap.from(".animate-title1", {
    scrollTrigger: ".person", 
    duration: 1,
    opacity: 0.1,
    y: -100,
    stagger: 0.3
  })

  gsap.from(".animate-person", {
    scrollTrigger: ".animate-person", 
    duration: 2,
    opacity: 0.1,
    x: -100,
    stagger: 0.3
  })

  gsap.from(".animate-person-img", {
    scrollTrigger: ".animate-person-img", 
    duration: 2,
    opacity: 0.1,
    x: 100,
    stagger: 0.3
  })

  gsap.from(".animate-title2", {
    scrollTrigger: ".works", 
    duration: 1,
    opacity: 0.1,
    y: -100,
    stagger: 0.3
  })

  gsap.from(".gallery-box", {
    scrollTrigger: ".gallery-box", 
    duration: 0.2,
    opacity: 0,
    stagger: 0.3
  })

  gsap.from(".animate-cyber", {
    scrollTrigger: ".footer", 
    duration: 1,
    opacity: 0,
    x: -100,
    stagger: 0.3
  })

  gsap.from(".animate-title3", {
    scrollTrigger: ".animate-title3", 
    duration: 1,
    opacity: 0.1,
    y: -100,
    stagger: 0.3
  })


  