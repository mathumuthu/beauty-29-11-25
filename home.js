const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 6000);

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("active");
});

// Dropdown toggle for mobile
const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropbtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownContent.classList.toggle("show");
});

// Close nav and dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('active');
  }
  if (!dropdownContent.contains(e.target) && !dropbtn.contains(e.target)) {
    dropdownContent.classList.remove('show');
  }
});




// Ready for future cart logic
document.querySelectorAll(".cart-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    alert("Product added to cart");
  });
});



function scrollTopPage(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}


