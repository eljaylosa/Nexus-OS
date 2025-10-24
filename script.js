const startBtn = document.getElementById("startBtn");
const bootSection = document.getElementById("boot");
const homeSection = document.getElementById("home");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const bootSound = document.getElementById("bootSound");
const clickSound = document.getElementById("clickSound");
const bootSound2 = document.getElementById("bootSound2");

function fadeToSection(targetId) {
  const current = document.querySelector(".section.active");
  const next = document.getElementById(targetId);
  if (current === next) return;
  clickSound.play();
  current.classList.remove("active");
  setTimeout(() => {
    current.classList.add("hidden");
    next.classList.remove("hidden");
    setTimeout(() => next.classList.add("active"), 50);
  }, 500);
}

startBtn.addEventListener("click", () => {
  bootSound.play();
  bootSound2.play();
  bootSection.classList.remove("active");
  setTimeout(() => {
    bootSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
    navbar.classList.remove("hidden");
    setTimeout(() => homeSection.classList.add("active"), 100);
  }, 800);
});

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.dataset.target;
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    fadeToSection(target);
  });
});

// ===== Feature Modal Logic =====
const features = document.querySelectorAll(".feature-list li");
const modal = document.getElementById("featureModal");
const modalTitle = document.getElementById("featureTitle");
const modalDesc = document.getElementById("featureDesc");
const closeBtn = document.querySelector(".close-btn");

features.forEach(feature => {
  feature.addEventListener("click", () => {
    modalTitle.textContent = feature.textContent;
    modalDesc.textContent = feature.dataset.desc;
    modal.classList.remove("hidden");
    clickSound.play();
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  clickSound.play();
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

