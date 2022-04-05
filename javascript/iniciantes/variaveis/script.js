var nome = "Gustavo",
  sobrenome = "Monteiro",
  ano = "2022",
  idade = 28,
  frase1 = "It's time",
  nomeCompleto = `${nome} ${sobrenome}`;

console.log(nome, sobrenome, ano, idade, frase1);

console.log(typeof nome, typeof ano, typeof idade);

console.log(nomeCompleto);

var dia = 4;
var pi = 3.14;
var exp = 2e10;

console.log(dia, pi, exp);

var total = 10 + (5 * 2) / 2 + 20;

console.log(total);

var teste1 = +"x20";
var teste2 = 28;

var NaN = teste1 + teste2;

console.log(NaN);

var n1 = "200";
n2 = 50;
soma = +n1 + n2;

console.log(soma);

var x = 5;

console.log(x++);
console.log(x);

var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade;

console.log(peso);

var num1 = 2;
num2 = 8;

if (num1 > num2) {
  console.log("O primeiro número é maior");
} else if (num1 === num2) {
  console.log("Os números são iguais");
} else {
  console.log("O segundo número é maior");
}

var corFavorita = "amarelo";

switch (corFavorita) {
  case "azul":
    console.log('Cor favorita é azul');
    break;
  case "vermelho":
    console.log('Cor favorita é vermelho');
    break;
  case "amarelo":
    console.log('Cor favorita é amarelo');
    break;
  default:
    console.log('Não informou a cor')
}


var ex = (5-2) && (5-'s') && (5-2);
console.log(ex);

var testando;

if(testando) {
  console.log('verdadeiro');
} else {
  console.log('falso');
}

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(83, 1.75));


function velhos(idade) {
  if(typeof idade !== 'number') {
    return 'Coloque uma idade em números'
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(velhos(65));
console.log(velhos('65'));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
  
}

console.log(faltaVisitar(32))