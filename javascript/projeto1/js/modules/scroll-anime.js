export default function scrollDown() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowHalf = window.innerHeight * 0.8;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowHalf;
      if (sectionTop < 0) {
        section.classList.add("scroll");
      } else if (section.classList.contains("scroll")) {
        section.classList.remove("scroll");
      }
    });
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
