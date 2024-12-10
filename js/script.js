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
