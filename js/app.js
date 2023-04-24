const toggleBtn = document.querySelector(".mobile-nav-toggle");
const toggleBtnIcon = document.querySelector(".mobile-nav-toggle i");
const primaryNav = document.querySelector(".primary-navigation");

toggleBtn.onclick = () => {
  primaryNav.hasAttribute("data-visible")
    ? primaryNav.setAttribute("aria-expanded", false)
    : primaryNav.setAttribute("aria-expanded", true);

  primaryNav.hasAttribute("data-visible")
    ? (toggleBtnIcon.classList = "fa-solid fa-bars")
    : (toggleBtnIcon.classList = "fa-solid fa-xmark");
  primaryNav.toggleAttribute("data-visible");
};

// Observe if element is visible on the screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
