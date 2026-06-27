// Header scroll state
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
  document.getElementById('backTop').classList.toggle('show', window.scrollY > 500);
});

// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const mobileClose = document.getElementById('mobileClose');

function openMenu(){ mobileMenu.classList.add('open'); overlay.classList.add('open'); }
function closeMenu(){ mobileMenu.classList.remove('open'); overlay.classList.remove('open'); }

burger.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Back to top
document.getElementById('backTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// Contact form submits normally to contact.php (server-side handling — see includes/db.php)
