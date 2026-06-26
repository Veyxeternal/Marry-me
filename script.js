/* =========================
   💍 INTERACTIVE STORY ENGINE
   ========================= */

let state = {
  stage: 0,
  typing: false
};

/* =========================
   🌌 STAR BACKGROUND
   ========================= */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = Array.from({ length: 120 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.5,
  speed: 0.2 + Math.random() * 0.6
}));

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  for (let s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();

    s.y -= s.speed;
    if (s.y < 0) {
      s.y = canvas.height;
      s.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(animateStars);
}
animateStars();

/* =========================
   💖 ENTRY ACTIONS
   ========================= */

function yes() {
  startStory("You just made me the happiest person alive. 🎉");
}

function no() {
  startStory("It's okay... this story still continues ❤️");
}

/* =========================
   📖 STORY DATA
   ========================= */

const scenes = [
  "There's something I want you to know...",
  "Maybe reality has already written an ending neither of us wanted.",
  "But for just this one moment...",
  "I wanted to live in a world where love was enough.",
  "A world where countries don't matter.",
  "Where religion doesn't matter.",
  "Where distance doesn't matter.",
  "Where time doesn't matter.",
  "Where only love exists...",
  "and I truly love you.",
  "In every lifetime... I'd still choose you. ❤️",
  "Thank you for reading my heart."
];

/* =========================
   🚀 STORY START
   ========================= */

function startStory(firstLine) {
  state.stage = 0;

  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>💌</h1>
    <p id="text"></p>
    <button id="nextBtn" onclick="nextScene()">Continue →</button>
  `;

  typeText(firstLine);
}

/* =========================
   ⏭️ NEXT SCENE CONTROLLER
   ========================= */

function nextScene() {
  if (state.typing) return;

  state.stage++;

  if (state.stage <= scenes.length) {
    typeText(scenes[state.stage - 1]);
  } else {
    finalScene();
  }
}

/* =========================
   ✨ TYPEWRITER ENGINE
   ========================= */

function typeText(text) {
  const el = document.getElementById("text");
  if (!el) return;

  state.typing = true;
  el.innerHTML = "";

  let i = 0;

  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(interval);
      state.typing = false;
    }
  }, 22);
}

/* =========================
   🌙 FINAL SCREEN
   ========================= */
function finalScene() {
  document.body.innerHTML = `
    <div class="card">
      <h2 style="font-size:28px;">❤️ One Last Thing</h2>
      <button id="finalBtn" class="yes">Tap</button>
    </div>
  `;

  document.getElementById("finalBtn").addEventListener("click", showFinal);
}
l
  `;
}

/* =========================
   💖 FINAL MESSAGE
   ========================= */

function showFinal() {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:black;
      color:white;
      font-size:32px;
      text-align:center;
      padding:20px;
      font-weight:600;
    ">
      I love you.
    </div>
  `;
}

/* =========================
   📱 RESPONSIVE FIX
   ========================= */

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
