var videoGames = ['Switch', 'Ps5', 'Xbox One X', 'Steam Deck'];

console.log(videoGames.length);
console.log(videoGames[0]);
console.log(videoGames[3]);

videoGames.pop();
console.log(videoGames[3]);

videoGames.push('3Ds');

console.log(videoGames[3]);
console.log('--------------------------');


for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

console.log('--------------------------');

var i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}


console.log('--------------------------');


for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'Ps5') {
    break;
  }
}


console.log('--------------------------');


var cores = ['azul', 'vermelho', 'verde', 'branco', 'preto'];
cores.forEach(function(cor, i) {
  console.log(cor, i);
});

console.log('--------------------------');


let anosCopa = [1959, 1962, 1970, 1994, 2002];

for (let i = 0; i < anosCopa.length; i++) {
  console.log(`O Brasil ganhou a copa de ${anosCopa[i]}`);
}

console.log('--------------------------');

let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'] ;

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if(frutas[i] === 'Pera') {
    break;
  }
}

console.log('--------------------------');

let fruta = frutas[frutas.length - 1];

console.log(fruta);