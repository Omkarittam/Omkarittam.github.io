const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

function showPhase(phaseId) {
  const contents = document.querySelectorAll(".phase-content");
  const buttons = document.querySelectorAll(".tab-btn");

  contents.forEach(content => {
    content.classList.remove("active");
  });

  buttons.forEach(button => {
    button.classList.remove("active");
  });

  document.getElementById(phaseId).classList.add("active");
  event.target.classList.add("active");
}
