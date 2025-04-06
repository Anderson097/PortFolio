// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
}

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Animate elements on scroll
const animatedItems = document.querySelectorAll('.animate');

function checkScroll() {
  animatedItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('show');
    }
  });
}

// Throttle the scroll event to improve performance
let isScrolling = false;
window.addEventListener('scroll', () => {
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(() => {
      checkScroll();
      isScrolling = false;
    });
  }
});

window.addEventListener('load', checkScroll);

const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon").querySelector("i");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  // Toggle icon
  if (document.body.classList.contains("light-mode")) {
    icon.classList.remove("fa-moon-o");
    icon.classList.add("fa-sun-o");
  } else {
    icon.classList.remove("fa-sun-o");
    icon.classList.add("fa-moon-o");
  }
});

