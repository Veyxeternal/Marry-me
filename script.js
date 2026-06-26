let i = 0;

const scenes = [
  "You just made me the happiest person alive ❤️",
  "There's something I want you to know...",
  "Maybe reality has already written an ending neither of us wanted.",
  "But for just this one moment...",
  "I wanted a world where love is enough.",
  "Where distance doesn't matter.",
  "Where time doesn't matter.",
  "Where only you matter to me.",
  "In every lifetime... I'd still choose you ❤️",
  "Thank you for reading my heart."
];

function start() {
  showScene(scenes[0]);
}

function next() {
  i++;

  if (i >= scenes.length) {
    finalScreen();
    return;
  }

  showScene(scenes[i]);
}

function showScene(text) {
  document.getElementById("app").innerHTML = `
    <h2>${text}</h2>
    <button onclick="next()">Continue →</button>
  `;
}

function finalScreen() {
  document.getElementById("app").innerHTML = `
    <h2>❤️ One Last Thing</h2>
    <button onclick="final()">Tap</button>
  `;
}

function final() {
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
    ">
      I love you.
    </div>
  `;
}
