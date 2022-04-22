export default function menuAcordion() {
  const showClass = "show";
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
