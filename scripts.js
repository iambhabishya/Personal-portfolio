// Hamburger Menu Toggle
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');

if (ham && mob) {
  // Open / Close menu
  ham.addEventListener('click', () => {
    mob.classList.toggle('open');
  });

  // Close menu when clicking a link
  mob.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mob.classList.remove('open');
    });
  });
}


// Scroll Reveal Animation
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('up');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
  obs.observe(el);
});


// Navbar Scroll Effect
const nav = document.getElementById('navbar');
let ticking = false;

if (nav) {
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.style.padding = window.scrollY > 50 ? '12px 60px' : '20px 60px';
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}