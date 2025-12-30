/* PRELOADER */
window.addEventListener("load", () => {
  document.getElementById("preloader").classList.add("hide");
});


/* HAMBURGER */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});




AOS.init({
  once: true,
  offset: 120,
  easing: "ease-out-cubic"
});




AOS.init({
  once: true,
  duration: 1000,
  easing: "ease-out-cubic"
});

function openBlog() {
  alert("This button is working! You can link it to blog-details.html");
}








function themeForest() {
  alert("ThemeForest link is working!");
}

/* Scroll Animation */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* SLIDER FUNCTIONALITY */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto slide every 4 seconds
setInterval(nextSlide, 4000);

// Dot click handlers
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

// Initialize first slide
if (slides.length > 0) {
  showSlide(0);
}

/* FORM HANDLERS */
function subscribeNewsletter() {
  const email = document.getElementById('newsletter-email').value;
  if (email === '') {
    alert('Please fill in your email address.');
    return;
  }
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  alert('Thank you for subscribing! You will receive our latest updates.');
  document.getElementById('newsletter-email').value = '';
}

function subscribeFooterNewsletter() {
  const email = document.getElementById('footer-email').value;
  if (email === '') {
    alert('Please fill in your email address.');
    return;
  }
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  alert('Thank you for subscribing to our newsletter!');
  document.getElementById('footer-email').value = '';
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}







const hero = document.querySelector(".hero");

const images = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fm=webp&w=1920",
  "https://images.unsplash.com/photo-1500835556837-99ac94a94552?fm=webp&w=1920",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?fm=webp&w=1920",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?fm=webp&w=1920"
];

let index = 0;

// Initial image
hero.style.backgroundImage = `url(${images[0]})`;

setInterval(() => {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url(${images[index]})`;
}, 5000); // change every 5 seconds
