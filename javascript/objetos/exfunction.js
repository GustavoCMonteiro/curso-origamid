// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll("p");

const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (soma, item) => {
    return soma + item.innerText.length;
  },
  0
);

console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : "";
  classe ? (elemento.innerHTML = conteudo) : "";
  return elemento;
}

console.log(criarElemento("h1", "ativo", "testando conteudo de h1"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, "h1", "titulo");

console.log(h1Titulo("Teste de h1"));
