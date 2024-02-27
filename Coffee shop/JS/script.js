var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
    
let Menu = document.querySelector('.manu-icon');
let navbar = document.querySelector('.navbar');
Menu.onclick = () => {
  Menu.classList.toggle('move');
  navbar.classList.toggle('open-menu');
}

window.onscroll=()=>{
  Menu.classList.remove('move');
  navbar.classList.remove('open-menu');
}

//scroll reveal animation
const animation=ScrollReveal ({
  origin:'top',
  distance:'60px',
  duration:'2500',
  delay:'400',
});
animation.reveal(".nav");
animation.reveal(".home-text",{origin:"left"});
animation.reveal(".home-img",{origin:"bottom"});
animation.reveal(".ser-box, .product-box,.team-box ,.book-data",{interval:100});