const emojiContainer = document.getElementById('emoji-container');
const emojis = ['🎉', '✨', '🎊', '🎆', '🎈', '🥳', '🌟'];

function createEmoji() {
  const emoji = document.createElement('div');
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.className = 'emoji';
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.animationDuration = Math.random() * 3 + 2 + 's';
  emoji.style.fontSize = Math.random() * 20 + 20 + 'px';
  emojiContainer.appendChild(emoji);

  setTimeout(() => emoji.remove(), 5000);
}

setInterval(createEmoji, 200);

setTimeout(() => {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.new-year-container').style.display = 'block';
  document.getElementById('facebook-id').style.display = 'block';
}, 6000);

