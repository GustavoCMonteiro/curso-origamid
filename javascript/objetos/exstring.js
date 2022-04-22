const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento do Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento do Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let valorRecebimento = 0;
transacoes.forEach((item) => {
  if (item.descricao.startsWith("Taxa")) {
    taxaTotal += +item.valor.slice(3);
  } else {
    valorRecebimento += +item.valor.slice(3);
  }
});
console.log("R$ " + taxaTotal);
console.log("R$ " + valorRecebimento);
console.log("------------------------");

const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);
console.log("------------------------");

let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a');
console.log(html);
console.log("------------------------");

const frase = 'Melhor do ano!';

console.log(frase.slice(-1));
console.log("------------------------");

