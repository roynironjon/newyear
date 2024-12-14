 // After the loading animation finishes
 setTimeout(() => {
  // Hide the loading animation
  document.querySelector('.container').style.display = 'none';

  // Show the Happy New Year animation
  const newYearContainer = document.querySelector('.new-year-container');
  newYearContainer.style.display = 'block';

  // Show the Facebook ID at the bottom
  const facebookId = document.getElementById('facebook-id');
  facebookId.style.display = 'block';

  // Function to wrap each letter in a span for animation
  const spanText = (text) => {
    const string = text.innerText;
    let spaned = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        spaned += ' '; // Preserve spaces
      } else {
        spaned += `<span>${string[i]}</span>`;
      }
    }
    text.innerHTML = spaned;
  };

  // Apply span wrapping to the Happy New Year text
  const headline = document.querySelectorAll('h1');
  headline.forEach(spanText);
}, 6000); // Wait for 4 seconds for the loading animation to complete

tsParticles.load("tsparticles", {
  fullScreen: { enable: true },
  background: { color: "#000" },
  fpsLimit: 60,
  particles: {
    number: { value: 0 },
    color: { value: ["#ffffff", "#b22234", "#3c3bfe"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.8,
      animation: {
        enable: false
      },
    },
    size: {
      value: { min: 2, max: 5 },
      animation: {
        enable: false
      },
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      outModes: { default: "out" },
    },
  },
  emitters: {
    direction: "top",
    position: { x: 50, y: 100 },
    rate: { delay: 0.5, quantity: 2 }, 
  },
});



const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fireworks = [];
const gravity = 0.05;
const minHeight = canvas.height * 0.2; // Minimum height before exploding (30% of canvas height)

class Firework {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speedY = Math.random() * -4 - 3; // Slower rocket speed upwards
    this.exploded = false;
    this.particles = [];
  }

  update() {
    if (!this.exploded) {
      this.y += this.speedY;
      this.speedY += gravity;

      // Explode when speedY becomes positive or when it reaches minHeight
      if (this.speedY >= 0 || this.y <= minHeight) {
        this.explode();
      }
    } else {
      this.particles.forEach((particle, index) => {
        particle.update();
        if (particle.alpha <= 0) {
          this.particles.splice(index, 1);
        }
      });
    }
  }

  draw() {
    if (!this.exploded) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    } else {
      this.particles.forEach((particle) => particle.draw());
    }
  }

  explode() {
    this.exploded = true;
    const colors = ["#ff4747", "#ffdd57", "#47ff47", "#4747ff", "#ff47ff"];
    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 2;
      const dx = Math.cos(angle) * speed;
      const dy = Math.sin(angle) * speed;
      const particleColor = colors[Math.floor(Math.random() * colors.length)];
      this.particles.push(new Particle(this.x, this.y, dx, dy, particleColor));
    }
  }
}

class Particle {
  constructor(x, y, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = Math.random() * 3 + 2;
    this.color = color;
    this.alpha = 1;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.dy += gravity / 2; // Falling effect
    this.alpha -= 0.02; // Fade out
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = canvas.height;
  const colors = ["#ff4747", "#ffdd57", "#47ff47", "#4747ff", "#ff47ff"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  fireworks.push(new Firework(x, y, color));
}

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  fireworks.forEach((firework, index) => {
    firework.update();
    firework.draw();
    if (firework.exploded && firework.particles.length === 0) {
      fireworks.splice(index, 1);
    }
  });

  requestAnimationFrame(animate);
}

setInterval(createFirework, 1000); // Launch a firework every second
animate();

// Resize canvas when the window is resized
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});



 // Function to update flame intensity dynamically
 function updateFlameEffect(scale, opacity, blur, innerBlur) {
  document.documentElement.style.setProperty('--flame-scale', scale);
  document.documentElement.style.setProperty('--flame-opacity', opacity);
  document.documentElement.style.setProperty('--flame-blur', blur);
  document.documentElement.style.setProperty('--inner-flame-blur', innerBlur);
}

// Example usage: Increase intensity after 3 seconds
setTimeout(() => {
  updateFlameEffect('1.5', '1', '40px', '50px'); // Intense flame effect
}, 3000);

// Example usage: Reduce intensity after 6 seconds
setTimeout(() => {
  updateFlameEffect('1.1', '0.6', '20px', '30px'); // Milder flame effect
}, 6000);