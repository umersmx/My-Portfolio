/* =====================
   HAMBURGER MENU
   ===================== */
const menuBtn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', showMenu);

function showMenu() {
  menuBtn.classList.toggle('is-active');
  menuBar.classList.toggle('is-active');
  menuList.classList.toggle('is-active');
}

// Close menu on nav link click
document.querySelectorAll('.nav-link a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('is-active');
    menuBar.classList.remove('is-active');
    menuList.classList.remove('is-active');
  });
});

/* =====================
   NAVBAR SCROLL EFFECT
   ===================== */
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/* =====================
   TYPING ANIMATION
   ===================== */
const roles = [
  'Aspiring Full-Stack Developer',
  'MERN Stack Expert',
  'Computer Science Student',
  'Tech Leader & Innovator'
];
const typedEl = document.getElementById('typed-text');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

type();

/* =====================
   SCROLL REVEAL
   ===================== */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger reveal for sibling elements
      setTimeout(() => {
        entry.target.classList.add('active');
      }, 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* =====================
   ACTIVE NAV HIGHLIGHTING
   ===================== */
const sections = document.querySelectorAll('section[id], main');
const navLinks = document.querySelectorAll('.nav-link a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id || '';
      navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active-link');
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* =====================
   BACK TO TOP BUTTON
   ===================== */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});