const lista = ['JavaScript', 'HTML', 'CSS', 'PHP'];

const body = document.querySelector('body');

for (let index = 0; index < lista.length; index++){
  console.log(lista[index])
  body.innerHTML += '<p>TESTE<p>'
}

function adicionarbody(item){
  body.innerHTML += '<li>' + item + '</li>'
}

lista.forEach(adicionarbody);


const links = document.querySelectorAll('nav a')

function logHref(item){
  const href = item.href;
  console.log(href)
}

links.forEach(logHref)