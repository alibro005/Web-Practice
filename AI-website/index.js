const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

const form = document.querySelector('.subscribe-form');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.style.display = 'block';
    form.reset();
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});