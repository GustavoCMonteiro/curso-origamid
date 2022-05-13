const inputCep = document.getElementById("cep");
const buttonCep = document.querySelector(".button");

buttonCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  if (cep.length < 7) {
    console.log("erro");
  } else {
    buscaCep(cep);
  }
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((body) => {
      preencheCampos(body);
    });
}

function preencheCampos(endereco) {
  const inputLogradouro = document.getElementById("logradouro");
  const inputBairro = document.getElementById("bairro");
  const inputCidade = document.getElementById("cidade");
  const inputEstado = document.getElementById("estado");

  inputBairro.value = endereco.bairro;
  inputLogradouro.value = endereco.logradouro;
  inputCidade.value = endereco.localidade;
  inputEstado.value = endereco.uf;
}

const inputBtc = document.querySelector(".valor-btc");

function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((body) => {
      inputBtc.textContent = ("R$ " + body.BRL.buy).replace(".", ",");
    });
}

setInterval(fetchBtc, 1000 * 30);

fetchBtc();
