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
    { threshold: 0.15 }
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
      // Reset progress animation
      const prog = b.querySelector('.tabs__progress');
      prog.style.animation = 'none';
      prog.offsetHeight; // reflow
      prog.style.animation = '';
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
      startCycle(); // reset timer
    });
  });

  // Pause on hover over the panel area
  const panelContainer = section.querySelector('.tabs__panels');
  panelContainer.addEventListener('mouseenter', () => { paused = true; });
  panelContainer.addEventListener('mouseleave', () => { paused = false; });

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

  // Build pips
  for (let i = 0; i < total; i++) {
    const pip = document.createElement('div');
    pip.className = 'citation-slider__pip' + (i === 0 ? ' active' : '');
    pip.addEventListener('click', () => goTo(i));
    pipsContainer.appendChild(pip);
  }
  const pips = pipsContainer.querySelectorAll('.citation-slider__pip');

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    pips.forEach((p, i) => p.classList.toggle('active', i === current));
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Keyboard
  slider.setAttribute('tabindex', '0');
  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });
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

  // Build dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'campus__carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
      goTo(i);
      resetTimer();
    });
    dotsContainer.appendChild(dot);
  }
  const dots = dotsContainer.querySelectorAll('.campus__carousel-dot');

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  let timer = setInterval(() => goTo(current + 1), INTERVAL);
  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), INTERVAL);
  }
})();
