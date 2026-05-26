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
