function trueorfalse(dado) {
  if (!!dado) {
    console.log('verdadeiro');
  } else {
    console.log('falso');
  }
}



function somaPerimetro(lado) {
  return (lado * 4);
}

console.log(somaPerimetro(5));
console.log(somaPerimetro(8));



function nomeCompleto(nome, segundoNome, sobrenome) {
  return nome + ' ' + segundoNome + ' ' + sobrenome;
}

console.log(nomeCompleto('Gustavo', 'Carvalho', 'Monteiro'));



function ePar(valor) {
  if (valor % 2 ==0) {
    console.log('O número é par');
  } else {
    console.log('O número é impar');
  }
}

ePar(4)
ePar(7)



function tipoDado(dado1) {
  return console.log(typeof dado1);
}

tipoDado(null)
tipoDado(21)
tipoDado('teste')



addEventListener('click', function() {
  console.log('Gustavo Monteiro')
})

