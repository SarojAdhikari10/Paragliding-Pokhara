document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
function sendWhatsApp(event){
  event.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value.trim());
  const service = encodeURIComponent(document.getElementById('service').value);
  const message = encodeURIComponent(document.getElementById('message').value.trim());
  const text = `Namaste, my name is ${name}. I am interested in ${service}. ${message}`;
  window.open(`https://wa.me/9779806543736?text=${text}`, '_blank');
}


// Hero image slider
const slides = document.querySelectorAll('.hero-slider .slide');
const dotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;
let sliderTimer;
function showSlide(index){
  if(!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  document.querySelectorAll('.slider-dots button').forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}
function startSlider(){
  if(!slides.length) return;
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => showSlide(currentSlide + 1), 4500);
}
if(slides.length && dotsContainer){
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show image ${i + 1}`);
    dot.addEventListener('click', () => { showSlide(i); startSlider(); });
    dotsContainer.appendChild(dot);
  });
  const prev = document.querySelector('.slider-btn.prev');
  const next = document.querySelector('.slider-btn.next');
  if(prev) prev.addEventListener('click', () => { showSlide(currentSlide - 1); startSlider(); });
  if(next) next.addEventListener('click', () => { showSlide(currentSlide + 1); startSlider(); });
  showSlide(0);
  startSlider();
}

// Review carousel
const reviews = document.querySelectorAll('.review-carousel .review-card');
let currentReview = 0;
function showReview(index){
  if(!reviews.length) return;
  currentReview = (index + reviews.length) % reviews.length;
  reviews.forEach((review, i) => review.classList.toggle('active', i === currentReview));
}
const reviewPrev = document.querySelector('.review-prev');
const reviewNext = document.querySelector('.review-next');
if(reviewPrev) reviewPrev.addEventListener('click', () => showReview(currentReview - 1));
if(reviewNext) reviewNext.addEventListener('click', () => showReview(currentReview + 1));
if(reviews.length){
  showReview(0);
  setInterval(() => showReview(currentReview + 1), 6000);
}
