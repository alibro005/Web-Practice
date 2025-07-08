const hamburger = document.querySelector(".hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("show")
})