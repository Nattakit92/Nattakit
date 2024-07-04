document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(
    "[id=sections], [id=current-section]",
  );
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (window.innerWidth > 950) {
        if (top <= 500) {
          nav.style.height = 80 - top / 20 + "px";
        } else {
          nav.style.height = "55px";
        }
      }
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          if (links.getAttribute("id") == "current-section") {
            links.id = "sections";
          }
          if (links.firstElementChild.getAttribute("href") == "#" + id) {
            links.id = "current-section";
          }
        });
      }
    });
  };
});
