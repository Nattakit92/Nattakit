let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("[id=sections], [id=current-section]");

var nav = document.querySelector("nav");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top <= 500) {
      nav.style.height = 80 - top / 20 + "px";
    } else {
      nav.style.height = "55px";
    }
    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
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
