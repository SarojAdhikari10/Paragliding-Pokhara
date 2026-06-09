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
