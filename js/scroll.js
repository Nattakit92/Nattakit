document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(
    "[id=sections], [id=current-section]",
  );
  const nav = document.querySelector("nav");
  var r = document.querySelector(":root");

  if (window.innerWidth > 950) {
    nav.style.height = "80px";
  }
  if (window.innerWidth < 800) {
    r.style.setProperty("--big-size", "50px");
    r.style.setProperty("--h2-size", "30px");
    r.style.setProperty("--h3-size", "20px");
    r.style.setProperty("--logo-size", "25px");
    r.style.setProperty("--section-size", "15px");
  }
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
