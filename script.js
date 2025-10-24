// SCRIPT.JS - FIXED

const startBtn = document.getElementById("startBtn");
const bootSection = document.getElementById("boot");
const homeSection = document.getElementById("home");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const bootSound = document.getElementById("bootSound");
const clickSound = document.getElementById("clickSound");
const bootSound2 = document.getElementById("bootSound2");
const sections = document.querySelectorAll(".section");

// === Section Fade Function ===
function fadeToSection(targetId) {
  const current = document.querySelector(".section.active");
  const next = document.getElementById(targetId);
  if (current === next) return;
  if (clickSound) clickSound.play();

  current.classList.remove("active");
  setTimeout(() => {
    current.classList.add("hidden");
    next.classList.remove("hidden");
    setTimeout(() => next.classList.add("active"), 50);
  }, 500);
}

// === Start Button Logic ===
startBtn.addEventListener("click", () => {
  if (bootSound) bootSound.play();
  if (bootSound2) bootSound2.play();

  bootSection.classList.remove("active");
  setTimeout(() => {
    bootSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
    navbar.classList.remove("hidden");
    setTimeout(() => homeSection.classList.add("active"), 100);
  }, 800);
});

// === Desktop Navbar Links ===
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.dataset.target;

    // Update active links for both desktop and mobile
    updateActiveLink(target);

    fadeToSection(target);
  });
});

// === Feature Modal Logic ===
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
    if (clickSound) clickSound.play();
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  if (clickSound) clickSound.play();
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// === Mobile Menu ===
const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelector('.menu-links');
const mobileLinks = document.querySelectorAll('.menu-links a');

menuBtn.addEventListener('click', () => {
  menuLinks.classList.toggle('show');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.dataset.target; // Use data-target to match section ID

    // Fade to section
    fadeToSection(targetId);

    // Update active links for both desktop and mobile
    updateActiveLink(targetId);

    // Close mobile menu
    menuLinks.classList.remove('show');

    if (clickSound) clickSound.play();
  });
});

// === Function to sync active links ===
function updateActiveLink(targetId) {
  navLinks.forEach(l => {
    l.classList.toggle("active", l.dataset.target === targetId);
  });
  mobileLinks.forEach(l => {
    l.classList.toggle("active", l.dataset.target === targetId);
  });
}
