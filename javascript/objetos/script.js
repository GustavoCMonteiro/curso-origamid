function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function () {
    return "Abracou";
  };
}

Pessoa.prototype.andar = function () {
  return "Andou";
};

const gustavo = new Pessoa("Gustavo", 28);

// console.log(Pessoa.prototype);
// console.log(gustavo.prototype);

const pais = "Brasil";
const cidade = new String("Rio");

const listaAnimais = ["Cachorro", "Gato", "Cavalo"];
console.log(listaAnimais);

const lista = document.querySelectorAll("li");

const listaArray1 = Array.prototype.slice.call(lista);
console.log(listaArray1);

const listaArray2 = Array.from(lista);
console.log(listaArray2);

const Carro = {
  marca: "Ford",
  preco: 2000,
  acelerar() {
    return true;
  },
};

console.log(typeof Carro);
console.log(typeof Carro.marca);
console.log(typeof Carro.preco);
console.log(typeof Carro.acelerar);
console.log(typeof Carro.acelerar());
console.log(typeof Carro.marca.charAt);
console.log(typeof Carro.marca.charAt(0));

console.log("--------------------------------");

function Pessoas(nome, sobrenome, idade, sexo) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.sexo = sexo;
  this.dadosGerais = function () {
    return (
      "Nome completo: " +
      nome +
      " " +
      sobrenome +
      ", " +
      "Idade: " +
      idade +
      ", " +
      "Sexo: " +
      sexo
    );
  };
}

Pessoas.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const beatriz = new Pessoas("Beatriz", "Kindler", 25, "Feminino");

console.log(beatriz.nomeCompleto());
console.log(beatriz.dadosGerais());

console.log("--------------------------------");

const li = document.querySelector("li");

//construtores dos dados abaixo

console.log(typeof li); // HTMLLITElement
console.log(typeof li.click); // Function
console.log(typeof li.innerText); // String
console.log(typeof li.value); // Number
console.log(typeof li.hidden); //Bolean
console.log(typeof li.offsetLeft); //Number
console.log(typeof li.click());
