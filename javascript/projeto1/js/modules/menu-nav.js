export default function tabMenuNav() {
  const showClass = "show";
  const animais = document.querySelectorAll(".animais-lista li");
  const animaisDescricao = document.querySelectorAll(".animais-descricao section");
  animaisDescricao[0].classList.add(showClass, animaisDescricao[0].dataset.anime);

  function addClasse(index) {
    const direcao = animaisDescricao[index].dataset.anime;
    animaisDescricao.forEach((section) => {
      section.classList.remove(showClass, direcao);
    });
    animaisDescricao[index].classList.add(showClass, direcao);
  }

  animais.forEach((item, index) => {
    item.addEventListener("click", () => {
      addClasse(index);
    });
  });
}