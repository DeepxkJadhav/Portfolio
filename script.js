/* core UI wiring for HTML version (keeps behavior from the React app) */

/* ---------- utilities ---------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* ---------- year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Clouds: create animated SVG clouds drifting across ---------- */
const cloudsEl = document.getElementById('clouds');
function makeCloud(i) {
  const wrapper = document.createElement('div');
  wrapper.className = 'cloud';
  const scale = 0.6 + Math.random()*0.8;
  wrapper.style.width = `${220 * scale}px`;
  wrapper.style.height = `${140 * scale}px`;
  // random vertical position
  const top = Math.random() * 80; // vh
  wrapper.style.top = `${top}vh`;
  // left start (offscreen left)
  wrapper.style.left = `${-30 - Math.random()*40}vw`;
  // Simple SVG cloud (original)
  wrapper.innerHTML = `
    <svg viewBox="0 0 200 120" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="g${i}" x1="0" x2="1">
          <stop offset="0%" stop-color="#991b1b"/>
          <stop offset="100%" stop-color="#ef4444"/>
        </linearGradient>
      </defs>
      <path d="M70 80c-22 14-48 6-52-10-4-16 12-32 34-28 4-26 44-38 62-14 22-8 48 8 44 30 18 2 30 18 22 32-10 18-40 18-58 6-14 10-38 10-52-6z" fill="url(#g${i})" stroke="#111" stroke-width="3"/>
    </svg>`;
  cloudsEl.appendChild(wrapper);

  // animate: move from left to right; speed depends on scale
  const distance = window.innerWidth + 600;
  const duration = 40 + Math.random()*60; // seconds
  const start = performance.now();
  function step(now) {
    const t = ((now - start) / (duration*1000)) % 1;
    const x = -30 + (110 + 30) * t; // -30vw to 110vw
    wrapper.style.transform = `translateX(${x}vw)`;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
for (let i=0;i<7;i++) makeCloud(i);

/* ---------- Sharingan spin + Mangekyō mode ---------- */
const sharingan = document.getElementById('sharingan');
let spinEnabled = true;
let spinSpeed = 1; // multiplier
function spinTick() {
  if (!spinEnabled) return;
  const angle = (Date.now() / (20 / spinSpeed));
  sharingan.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(spinTick);
}
requestAnimationFrame(spinTick);

/* Mangekyō toggle (Konami code will trigger) */
const mangekyoAura = document.getElementById('mangekyoAura');
function setMangekyo(on) {
  if (on) {
    mangekyoAura.classList.add('on');
    mangekyoAura.classList.remove('hidden');
    // subtle extra spin
    spinSpeed = 2.6;
  } else {
    mangekyoAura.classList.remove('on');
    setTimeout(()=> mangekyoAura.classList.add('hidden'), 400);
    spinSpeed = 1;
  }
}

/* ---------- Theme toggle ---------- */
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
  document.body.classList.toggle('theme-light');
  // update icon
  const isDark = document.body.classList.contains('theme-dark');
  themeToggle.textContent = isDark ? '🌙' : '☀️';
});

/* ---------- UI sound "ping" (optional) ---------- */
const soundToggle = document.getElementById('soundToggle');
let uiSoundEnabled = false;
let tickAudio = null;
soundToggle.addEventListener('click', () => {
  uiSoundEnabled = !uiSoundEnabled;
  if (uiSoundEnabled) {
    // tiny click sound (data URI silent placeholder can be replaced)
    tickAudio = new Audio('data:audio/mp3;base64,//uQZAAAA...'); // replace with real sound if desired
    soundToggle.textContent = '🔈';
  } else {
    soundToggle.textContent = '🔊';
  }
});
function UIPlay() {
  if (uiSoundEnabled && tickAudio) {
    tickAudio.currentTime = 0;
    tickAudio.play().catch(()=>{});
  }
}

/* ---------- Background music ---------- */
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let musicPlaying = false;
musicToggle.addEventListener('click', async () => {
  if (!musicPlaying) {
    try {
      await bgMusic.play();
      musicToggle.textContent = '🔇 Pause Music';
      musicPlaying = true;
      UIPlay();
    } catch(e) {
      // user gesture required — fallback handled by click
      console.warn('Music play failed', e);
    }
  } else {
    bgMusic.pause();
    musicToggle.textContent = '🎶 Play Music';
    musicPlaying = false;
    UIPlay();
  }
});

/* ---------- Konami code (same sequence) ---------- */
/* Sharingan elements */
const normalSharingan = document.getElementById('sharinganNormal');
const mangekyoSharingan = document.getElementById('sharinganMangekyo');
const mangekyoAura = document.getElementById('mangekyoAura');

function setMangekyo(on) {
  if (on) {
    normalSharingan.classList.add('hidden');
    mangekyoSharingan.classList.remove('hidden');
    mangekyoAura.classList.add('on');
    mangekyoAura.classList.remove('hidden');
  } else {
    normalSharingan.classList.remove('hidden');
    mangekyoSharingan.classList.add('hidden');
    mangekyoAura.classList.remove('on');
    setTimeout(() => mangekyoAura.classList.add('hidden'), 400);
  }
}

/* Konami code */
const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let konamiBuffer = [];
let mangekyoActive = false;

window.addEventListener('keydown', (ev) => {
  konamiBuffer.push(ev.key);
  if (konamiBuffer.length > KONAMI.length) konamiBuffer.shift();
  if (konamiBuffer.join(',').toLowerCase() === KONAMI.join(',').toLowerCase()) {
    mangekyoActive = !mangekyoActive;
    setMangekyo(mangekyoActive);
    alert(`Mangekyō Mode ${mangekyoActive ? 'Activated!' : 'Deactivated'}`);
  }
});

/* ---------- Chat widget: dialog + simple rules ---------- */
const chatOpen = document.getElementById('chatOpen');
const chatDialog = document.getElementById('chatDialog');
const chatClose = document.getElementById('chatClose');
const chatLog = document.getElementById('chatLog');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');

function appendBot(text) {
  const d = document.createElement('div');
  d.className = 'bot';
  d.innerHTML = `<strong>Kaelith:</strong> ${text}`;
  chatLog.appendChild(d);
  chatLog.scrollTop = chatLog.scrollHeight;
}
function appendUser(text) {
  const d = document.createElement('div');
  d.className = 'you';
  d.innerHTML = `<strong>You:</strong> ${text}`;
  chatLog.appendChild(d);
  chatLog.scrollTop = chatLog.scrollHeight;
}

/* initial message */
appendBot("Ask me about Deepak's projects ✨");

chatOpen.addEventListener('click', () => {
  if (typeof chatDialog.showModal === 'function') {
    chatDialog.showModal();
  } else {
    chatDialog.style.display = 'block';
  }
  chatOpen.setAttribute('aria-expanded', 'true');
});

chatClose.addEventListener('click', () => {
  chatDialog.close();
  chatOpen.setAttribute('aria-expanded', 'false');
});

function replyRules(msg) {
  msg = msg || '';
  if (/hello|hi|yo|namaste/i.test(msg)) return "Yo! I'm Kaelith — Deepak's friendly portfolio sentinel. Ask about projects ✨";
  if (/project|work|build|made/i.test(msg)) return "We have GhostVision, Sentient-UI, Kaelith-AI and NeuroNosh. Which one?";
  if (/ghost|vision/i.test(msg)) return "GhostVision: ultra-fast CV on phones with spicy overlays. Low light? It shines.";
  if (/sentient/i.test(msg)) return "Sentient-UI adapts interface tone/density to your vibe. Respectful, on-device first.";
  if (/kaelith/i.test(msg)) return "Kaelith-AI is a compact agent with graph memory + tool-use. Tactical and polite.";
  if (/neuro|nosh/i.test(msg)) return "NeuroNosh balances macros with cravings and pantry-scans your ingredients.";
  if (/contact|reach|email/i.test(msg)) return "Ping via LinkedIn or Instagram — quick replies there!";
  return "Try: 'show projects' or ask about GhostVision / Sentient-UI / Kaelith-AI / NeuroNosh. Also… type ↑↑↓↓←→←→BA 😉";
}

function sendChat() {
  const txt = chatInput.value.trim();
  if (!txt) return;
  appendUser(txt);
  chatInput.value = '';
  setTimeout(() => {
    appendBot(replyRules(txt));
    UIPlay();
  }, 220);
}

chatSend.addEventListener('click', sendChat);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendChat();
});

/* ---------- small accessibility fallback: close dialog on click outside ---------- */
chatDialog.addEventListener('click', (e) => {
  const rect = chatDialog.getBoundingClientRect();
  // if user clicked on backdrop area
  if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
    chatDialog.close();
  }
});

/* ---------- polish: small animation on load ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // subtle entry
  document.body.style.transition = 'opacity 450ms ease';
  document.body.style.opacity = '0';
  requestAnimationFrame(()=> document.body.style.opacity='1');
});

/* EOF */
