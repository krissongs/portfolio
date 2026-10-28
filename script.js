const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", isOpen);  
});

links.querySelectorAll("a").forEach((link) => {
  link.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");  
  });
