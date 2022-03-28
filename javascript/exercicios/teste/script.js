const nav = document.querySelector('nav');
const produtos = document.querySelector('.produtos a');

console.log(nav);
console.log(produtos);
console.log(produtos.href);

console.dir(nav);

nav.style.backgroundColor = "lightblue";
nav.style.padding = "1rem"

nav.classList.add("ativo");

const decimal = 2.78;

console.log(decimal.toFixed());
console.log(3);


function teste(){
  const nome = 'Java';
  console.log(nome);
}

teste();
teste();


function logcurso(nome, horas){
  console.log(nome, horas, 'horas');
}

logcurso('JavaScript', '40');
logcurso('HTML', '20');

