var pessoa = {
  nome: 'Gustavo',
  idade: 28,
  sexo: 'Masculino',
}

console.log(pessoa);
console.log(pessoa.nome);


var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));


var eu = {
  nome: 'Gustavo',
  sobrenome: 'Monteiro',
  sexo: 'M',
  idade: 28,
  estadoCivil: 'Solteiro',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
}

console.log(eu.estadoCivil);
console.log(eu.nomeCompleto());
console.log(eu.idade);


var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

console.log(carro.preco);
console.log(carro.marca);

carro.preco = 3000;
carro.marca = 'BMW';

console.log(carro.preco);
console.log(carro.marca);


let cachorro = {
  nome: 'Thor',
  raca: 'Labrador',
  idade: 10,
  cor: 'preto',
  late(pessoa)  {
    if (pessoa === 'homem') {
      return 'latir'
    } else {
      return 'Nada';
    }
  }
}

console.log(cachorro.nome);
console.log(cachorro.raca);
console.log(cachorro.cor);
console.log(cachorro.late('homem'));
console.log(cachorro.late('mulher'));


// tudo é objeto

var nome = 'Gustavo';

console.log(nome.length);
console.log(nome.charAt(4));
console.log(nome.replace('Gustavo', 'Monteiro'));
console.log(nome);


var numero = 1.8783;

console.log(numero.toString());
console.log(numero.toFixed());
console.log(numero.toFixed(1));
console.log(numero.toFixed(2));
