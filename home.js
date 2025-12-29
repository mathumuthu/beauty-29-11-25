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

// Dropdown toggle for mobile (support multiple dropdowns)
const dropbtns = document.querySelectorAll(".dropbtn");
const dropdownContents = document.querySelectorAll(".dropdown-content");

dropbtns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // Close other dropdowns
    dropdownContents.forEach((content, cidx) => {
      if (cidx !== idx) content.classList.remove("show");
    });
    // Toggle this dropdown
    dropdownContents[idx].classList.toggle("show");
  });
});

// Close nav and dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('active');
  }
  let clickedDropdown = false;
  dropbtns.forEach((btn, idx) => {
    if (btn.contains(e.target) || dropdownContents[idx].contains(e.target)) {
      clickedDropdown = true;
    }
  });
  if (!clickedDropdown) {
    dropdownContents.forEach(content => content.classList.remove('show'));
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






