/* ===== SCROLL REVEAL ===== */
(function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();

/* ===== USE-CASE TABS (auto-cycle with progress) ===== */
(function initTabs() {
  const section = document.getElementById('useCaseTabs');
  if (!section) return;
  const btns = section.querySelectorAll('.tabs__btn');
  const panels = section.querySelectorAll('.tabs__panel');
  let current = 0;
  let timer = null;
  let paused = false;
  const INTERVAL = 5000;

  function activate(index) {
    btns.forEach((b) => {
      b.classList.remove('active');
      const prog = b.querySelector('.tabs__progress');
      if (prog) {
        prog.style.animation = 'none';
        prog.offsetHeight;
        prog.style.animation = '';
      }
    });
    panels.forEach((p) => p.classList.remove('active'));
    btns[index].classList.add('active');
    panels[index].classList.add('active');
    current = index;
  }

  function startCycle() {
    clearInterval(timer);
    timer = setInterval(() => {
      if (!paused) {
        activate((current + 1) % btns.length);
      }
    }, INTERVAL);
  }

  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      activate(i);
      startCycle();
    });
  });

  const panelContainer = section.querySelector('.tabs__panels');
  if (panelContainer) {
    panelContainer.addEventListener('mouseenter', () => { paused = true; });
    panelContainer.addEventListener('mouseleave', () => { paused = false; });
  }

  startCycle();
})();

/* ===== CITATION SLIDER ===== */
(function initCitationSlider() {
  const slider = document.getElementById('citationSlider');
  if (!slider) return;
  const track = slider.querySelector('.citation-slider__track');
  const slides = track.querySelectorAll('.citation-slide');
  const pipsContainer = document.getElementById('citationPips');
  const prevBtn = slider.querySelector('.citation-slider__arrow--prev');
  const nextBtn = slider.querySelector('.citation-slider__arrow--next');
  let current = 0;
  const total = slides.length;

  for (let i = 0; i < total; i++) {
    const pip = document.createElement('div');
    pip.className = 'citation-slider__pip' + (i === 0 ? ' active' : '');
    pip.addEventListener('click', () => goTo(i));
    pipsContainer.appendChild(pip);
  }
  const pips = pipsContainer.querySelectorAll('.citation-slider__pip');

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    pips.forEach((p, i) => p.classList.toggle('active', i === current));
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  slider.setAttribute('tabindex', '0');
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  // Touch/swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  const viewport = slider.querySelector('.citation-slider__viewport');
  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  viewport.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(current + 1);
      else goTo(current - 1);
    }
  }, { passive: true });
})();

/* ===== CAMPUS CAROUSEL ===== */
(function initCampusCarousel() {
  const carousel = document.getElementById('campusCarousel');
  if (!carousel) return;
  const track = carousel.querySelector('.campus__carousel-track');
  const slides = track.querySelectorAll('.campus__carousel-slide');
  const dotsContainer = document.getElementById('campusDots');
  let current = 0;
  const total = slides.length;
  const INTERVAL = 3500;

  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'campus__carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => {
      goTo(i);
      resetTimer();
    });
    dotsContainer.appendChild(dot);
  }
  const dots = dotsContainer.querySelectorAll('.campus__carousel-dot');

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  let timer = setInterval(() => goTo(current + 1), INTERVAL);
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  // Touch support
  let touchStartX = 0;
  const viewport = carousel.querySelector('.campus__carousel-viewport');
  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  viewport.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(current + 1);
      else goTo(current - 1);
      resetTimer();
    }
  }, { passive: true });
})();

/* ===== SMOOTH PARALLAX ON HERO STAT CARDS ===== */
(function initHeroParallax() {
  const cards = document.querySelectorAll('.stat-card');
  if (!cards.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (scrollY < 800) {
          const factor = scrollY * 0.03;
          cards.forEach((card, i) => {
            const dir = i % 2 === 0 ? 1 : -1;
            card.style.transform = 'translateY(' + (dir * factor) + 'px)';
          });
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();
