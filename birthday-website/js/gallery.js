/* =====================================================
   gallery.js — Scroll-triggered animations
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.photo-card');

  /* ── Intersection Observer for scroll reveal ── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  cards.forEach(card => observer.observe(card));

  /* ── Subtle parallax on scroll ── */
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    cards.forEach((card, i) => {
      const rect   = card.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      const img    = card.querySelector('img');
      if (img && card.classList.contains('visible')) {
        // subtle parallax: image moves slightly opposite to scroll
        const shift = center * 0.04;
        img.style.transform = `scale(1.08) translateY(${shift}px)`;
      }
    });
  }, { passive: true });

});
