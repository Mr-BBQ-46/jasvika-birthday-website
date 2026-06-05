/* =====================================================
   petals.js — Floating Petal Particles
   Shared between pages
   ===================================================== */

(function spawnPetals() {
  const container = document.getElementById('petals');
  if (!container) return;

  const colors = [
    'rgba(244,114,182,0.55)',
    'rgba(168,85,247,0.50)',
    'rgba(99,102,241,0.50)',
    'rgba(196,132,252,0.55)',
    'rgba(232,121,249,0.45)',
    'rgba(251,182,206,0.40)',
  ];

  const count = window.innerWidth < 600 ? 18 : 30;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    const size  = Math.random() * 14 + 6;
    petal.className = 'petal';
    petal.style.cssText = `
      left: ${Math.random() * 110 - 5}%;
      width: ${size}px;
      height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 12 + 9}s;
      animation-delay: ${Math.random() * -22}s;
    `;
    container.appendChild(petal);
  }
})();
