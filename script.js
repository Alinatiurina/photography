const btn = document.querySelector(".solid-menu-btn");
const closeBtn = document.querySelector(".mobile-close-btn");
const mob = document.querySelector(".mobile-menu");
const mobLi = document.querySelector('.mobile-menu-nav-list');
const mainDoc = document.querySelector('main');



function mobileMenuOpen() {
 mob.classList.add("is-open") 
}
function mobileMenuClose() {
 mob.classList.remove("is-open") 
}
btn.addEventListener("click", mobileMenuOpen);
closeBtn.addEventListener("click", mobileMenuClose);

mainDoc.addEventListener('click', (e) => {

    if (e.target !== mob) {
        mob.classList.remove("is-open")
        return;
    }
})

mobLi.addEventListener('click', (e) => {
        mob.classList.remove("is-open")
        return;
})

const gallery = document.querySelector(".portfolio-cards")

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
     delay: 2500,
     disableOnInteraction: false,
    },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: true,
  mousewheel: true,
  slidesPerView: 1,
    speed: 1000,
  // effect: "coverflow",
  // coverflowEffect: {
  //   rotate: 30,
  // },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}