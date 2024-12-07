const canvas = document.getElementById("background-effects");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const emojis = ['🎉', '✨', '🎊', '🎆', '🎈', '🥳', '🌟', '💫', '🍾', '🎁'];
let particlesArray = [];

class Particle {
  constructor(x, y, size, emoji, velocityX, velocityY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.emoji = emoji;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.opacity = 1;
  }

  draw() {
    ctx.font = `${this.size}px Arial`;
    ctx.globalAlpha = this.opacity;
    ctx.fillText(this.emoji, this.x, this.y);
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;
    this.opacity -= 0.01;
    if (this.opacity <= 0) this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 30 + 20;
    this.opacity = 1;
    this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
    this.velocityX = (Math.random() - 0.5) * 2;
    this.velocityY = (Math.random() - 0.5) * 2;
  }
}

function createParticles() {
  for (let i = 0; i < 100; i++) {
    const size = Math.random() * 30 + 20;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const velocityX = (Math.random() - 0.5) * 2;
    const velocityY = (Math.random() - 0.5) * 2;
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    particlesArray.push(new Particle(x, y, size, emoji, velocityX, velocityY));
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animateParticles);
}

createParticles();
animateParticles();
