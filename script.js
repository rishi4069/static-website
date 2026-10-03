const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

document.querySelectorAll("#navMenu a").forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
});
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
let current = "";

sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
    }
});

navLinks.forEach(link => {
    link.style.color = "";

    if (link.getAttribute("href") === `#${current}`) {
        link.style.color = "#63e6be";
    }
});


});