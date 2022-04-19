const showClass = "show";

function tabMenuNav() {
  const animais = document.querySelectorAll(".animais-lista li");
  const animaisDescricao = document.querySelectorAll(
    ".animais-descricao section"
  );

  animaisDescricao[0].classList.add(showClass);

  function addClasse(index) {
    animaisDescricao.forEach((section) => {
      section.classList.remove(showClass);
    });
    animaisDescricao[index].classList.add(showClass);
  }

  animais.forEach((item, index) => {
    item.addEventListener("click", () => {
      addClasse(index);
    });
  });
}

function menuAcordion() {
  const faqList = document.querySelectorAll(".faq-lista dt");
  faqList[0].classList.add(showClass);
  faqList[0].nextElementSibling.classList.add(showClass);

  function addResposta() {
    this.classList.toggle(showClass);
    this.nextElementSibling.classList.toggle(showClass);
  }

  faqList.forEach((item) => {
    item.addEventListener("click", addResposta);
  });
}

function scrollSuave() {
  const linksInternos = document.querySelectorAll(".menu ul a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    console.log(href, section);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // //forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // })
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

function scrollDown() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowHalf = window.innerHeight * 0.7;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowHalf;
      if (sectionTop < 0) {
        section.classList.add("scroll");
      } else {
        section.classList.remove("scroll");
      }
    });
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}

scrollDown();
scrollSuave();
tabMenuNav();
menuAcordion();
