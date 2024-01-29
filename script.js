const btn = document.querySelector(".solid-menu-btn")
const closeBtn = document.querySelector(".mobile-close-btn")


function mobileMenu() {
 const mob = document.querySelector(".mobile-menu");
 mob.classList.toggle("is-open") 
}

btn.addEventListener("click", mobileMenu);
closeBtn.addEventListener("click", mobileMenu)