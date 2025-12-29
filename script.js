/* PRELOADER */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hide");
  }, 700);
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

