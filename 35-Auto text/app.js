const typedTextElement = document.querySelector(".typed-text");
const cursorElement = document.querySelector(".cursor");
const words = ["Weird", "Cool", "Life", "Fun", "Awesome", "Fast", "Famous"];

const typingDelay = 150;
const erasingDelay = 150;
const newLetterDelay = 1000;

let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < words[index].length) {
    typedTextElement.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextElement.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index = (index + 1) % words.length;
    setTimeout(type, typingDelay);
  }
}

// Cursor blinking effect
function blinkCursor() {
  cursorElement.classList.toggle("blink");
}

// Initial setup for cursor blinking
setInterval(blinkCursor, 500);
