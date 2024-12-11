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