(() => {
  // Sía á vöruumbúðir eftir vörumerki
  const chips = document.querySelectorAll('.filters .chip');
  const packItems = document.querySelectorAll('.pack__item');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('on'));
      chip.classList.add('on');
      const brand = chip.dataset.brand;
      packItems.forEach((item) => {
        item.hidden = !(brand === 'all' || item.dataset.brand === brand);
      });
    });
  });

  // Innihald má aldrei hverfa: án JS eða IO er allt sýnilegt.
  const reveals = document.querySelectorAll('[data-reveal]');
  if (!reveals.length || !('IntersectionObserver' in window)) return;

  document.documentElement.classList.add('js-reveal');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

  reveals.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 3, 2) * 60}ms`;
    io.observe(el);
  });

  setTimeout(() => {
    reveals.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.2) el.classList.add('is-visible');
    });
  }, 1500);
})();
