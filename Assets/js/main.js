const LocoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// navmenu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// cursor
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.addEventListener("mousedown", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
});

document.addEventListener("mouseup", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1)";
});

const interactiveElements = document.querySelectorAll(
  "a, button, .social-links svg"
);

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("large");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("large");
  });
});
