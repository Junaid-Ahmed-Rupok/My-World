/* ============================================================
   SARDER JUNAID AHMED — Portfolio · main.js
   ============================================================ */

// ── NAVBAR SCROLL EFFECT ──────────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ── MOBILE NAV TOGGLE ────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  // Animate hamburger → X
  const spans = navToggle.querySelectorAll('span');
  navLinks.classList.contains('open')
    ? (spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)',
       spans[1].style.opacity   = '0',
       spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)')
    : (spans[0].style.transform = '',
       spans[1].style.opacity   = '',
       spans[2].style.transform = '');
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  });
});

// ── ACTIVE NAV LINK ON SCROLL ────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ── SCROLL REVEAL ─────────────────────────────────────────
const revealTargets = [
  '.about-grid',
  '.skill-card',
  '.project-card',
  '.research-card',
  '.cv-block',
  '.contact-grid',
  '.section-title',
  '.hero-stats',
];

// Mark elements for reveal
revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.07}s`;
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── SMOOTH SCROLL for anchor links ───────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = navbar.offsetHeight;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ── CONTACT FORM (mailto fallback) ───────────────────────
const sendBtn  = document.getElementById('sendBtn');
const formNote = document.getElementById('formNote');

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formNote.style.color = '#f87171';
      formNote.textContent = 'Please fill in all fields.';
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:junaidahmedrupok@gmail.com?subject=${subject}&body=${body}`;

    formNote.style.color = '#22c55e';
    formNote.textContent = '✓ Opening your email client…';

    // Reset after 3s
    setTimeout(() => {
      document.getElementById('name').value    = '';
      document.getElementById('email').value   = '';
      document.getElementById('message').value = '';
      formNote.textContent = '';
    }, 3000);
  });
}

// ── TYPED HERO EYEBROW (subtle cursor blink) ─────────────
const eyebrow = document.querySelector('.hero-eyebrow');
if (eyebrow) {
  const cursor = document.createElement('span');
  cursor.textContent = '|';
  cursor.style.cssText = 'color:#00e5ff;animation:blink 1s step-end infinite;margin-left:2px;';
  const style = document.createElement('style');
  style.textContent = '@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}';
  document.head.appendChild(style);
  eyebrow.appendChild(cursor);
}

// ── CANVAS PARTICLE BACKGROUND (hero only) ───────────────
(function initParticles() {
  const hero   = document.getElementById('hero');
  if (!hero) return;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:0;opacity:0.35;';
  hero.querySelector('.hero-bg').appendChild(canvas);

  const ctx    = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }

  function makeParticles(n) {
    return Array.from({ length: n }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r:  Math.random() * 1.5 + 0.5,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,229,255,0.6)';
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  particles = makeParticles(80);
  draw();

  window.addEventListener('resize', () => {
    resize();
    particles = makeParticles(80);
  }, { passive: true });
})();
