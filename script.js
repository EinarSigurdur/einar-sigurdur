(() => {
  const items = document.querySelectorAll('[data-reveal]');
  const revealAll = () => items.forEach((el) => el.classList.add('is-visible'));

  // Ef eitthvað fer úrskeiðis er allt sýnilegt — innihald má aldrei hverfa.
  if (!items.length || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add('js-reveal');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

  items.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 3, 2) * 60}ms`;
    io.observe(el);
  });

  // Öryggisnet: eftir 1,5 sekúndur er allt sem er í skjánum sýnilegt.
  setTimeout(() => {
    items.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 1.2) el.classList.add('is-visible');
    });
  }, 1500);
})();
