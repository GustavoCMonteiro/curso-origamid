let x = 5;
let y = 10;

x += 5;
console.log(x);

x *= y;
console.log(x);


let idade = 19;
let podeBeber = (idade >= 19) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);

var soma = 1000;

soma += 500;

console.log(soma);

let possuiCarro = true,
    possuiCasa = true;

let darCredito = (possuiCarro && possuiCasa) ? 'Liberar credito' : 'Não Liberar credito'

console.log(darCredito);


console.log('---------------------------------')

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?

const dois = 2;

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

console.log('---------------------------------');

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
