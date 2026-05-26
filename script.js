const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

function showPhase(phaseId, button) {
  const contents = document.querySelectorAll(".phase-content");
  const buttons = document.querySelectorAll(".tab-btn");

  contents.forEach(content => {
    content.classList.remove("active");
  });

  buttons.forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(phaseId).classList.add("active");
  button.classList.add("active");
}

const typingElement = document.getElementById("typing");

const words = [
  "Computer Engineering Student",
  "Web Developer",
  "Project Developer",
  "AI Complaint Management Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();
