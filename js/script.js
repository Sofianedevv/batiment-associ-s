const nav = document.getElementById('nav');
const icons = document.getElementById('icons');
const main = document.querySelector('main');

icons.addEventListener('click', () => {
    nav.classList.toggle('active');
    main.classList.toggle('menu-open', nav.classList.contains('active'));
});

const links = document.querySelectorAll('nav li');

links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        main.classList.remove('menu-open');
    });
});


document.addEventListener('click', (event) => {
    // Vérifiez si le clic n'est pas dans le menu burger
    if (!nav.contains(event.target) && !icons.contains(event.target)) {
        // Fermez le menu burger s'il est ouvert
        nav.classList.remove('active');
        main.classList.remove('menu-open');
    }
});

document.addEventListener('scroll', (event) => {
    // Empêcher le comportement par défaut du défilement
    event.preventDefault();
    
    // Fermer le menu burger s'il est ouvert
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        main.classList.remove('menu-open');
    }
});




// swipe avis

let swiperCards = new Swiper('.card__content', {
 
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        600:{
            slidesPerView: 1,
        },
        800:{
            slidesPerView:2,
        },

        1000:{
            slidesPerView:3,
        }
    }
  

  
  });