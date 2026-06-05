/* =====================================================
   countdown.js — Birthday Countdown Timer
   Set BIRTHDAY_DATE to your girlfriend's birthday.
   ===================================================== */

// ══════════════════════════════════════════
//  ▶  CHANGE THIS DATE to June 29 of the
//     current or next upcoming year.
//     Format: "Month Day, Year HH:MM:SS"
// ══════════════════════════════════════════
const BIRTHDAY_DATE = "June 29, 2025 00:00:00";

const daysEl    = document.getElementById('days');
const hoursEl   = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const unlockArea  = document.getElementById('unlock-area');
const previewArea = document.getElementById('preview-area');

function pad(n) {
  return String(n).padStart(2, '0');
}

function pulseEl(el) {
  el.classList.remove('pulse');
  void el.offsetWidth; // reflow to retrigger animation
  el.classList.add('pulse');
  setTimeout(() => el.classList.remove('pulse'), 200);
}

let prevSeconds = null;

function updateTimer() {
  const now    = new Date().getTime();
  const target = new Date(BIRTHDAY_DATE).getTime();
  const diff   = target - now;

  if (diff <= 0) {
    // 🎉 Birthday has arrived!
    daysEl.textContent    = '00';
    hoursEl.textContent   = '00';
    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    unlockArea.classList.remove('hidden');
    previewArea.style.display = 'none';
    clearInterval(timerInterval);
    launchConfetti();
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.textContent    = pad(days);
  hoursEl.textContent   = pad(hours);
  minutesEl.textContent = pad(minutes);

  if (seconds !== prevSeconds) {
    secondsEl.textContent = pad(seconds);
    pulseEl(secondsEl);
    prevSeconds = seconds;
  }
}

const timerInterval = setInterval(updateTimer, 500);
updateTimer(); // run immediately

/* ── Simple confetti burst when timer hits 0 ── */
function launchConfetti() {
  const colors = ['#f472b6','#a855f7','#6366f1','#c084fc','#e879f9'];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed;
      width: ${Math.random() * 10 + 6}px;
      height: ${Math.random() * 10 + 6}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      left: ${Math.random() * 100}vw;
      top: -20px;
      z-index: 9999;
      opacity: 1;
      animation: confettiFall ${Math.random() * 2.5 + 2}s ease ${Math.random() * 1.5}s forwards;
    `;
    document.body.appendChild(el);
  }

  // Inject keyframe if not present
  if (!document.getElementById('confetti-style')) {
    const style = document.createElement('style');
    style.id = 'confetti-style';
    style.textContent = `
      @keyframes confettiFall {
        0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(110vh) rotate(${Math.random()*720}deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

/* ── Spawn floating petals ── */
(function spawnPetals() {
  const container = document.getElementById('petals');
  if (!container) return;

  const colors = [
    'rgba(244,114,182,0.6)',
    'rgba(168,85,247,0.5)',
    'rgba(99,102,241,0.5)',
    'rgba(196,132,252,0.55)',
    'rgba(232,121,249,0.5)',
  ];

  for (let i = 0; i < 22; i++) {
    const petal = document.createElement('div');
    const size  = Math.random() * 12 + 7;
    petal.className = 'petal';
    petal.style.cssText = `
      left: ${Math.random() * 110 - 5}%;
      width: ${size}px;
      height: ${size}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 10 + 8}s;
      animation-delay: ${Math.random() * -18}s;
    `;
    container.appendChild(petal);
  }
})();
