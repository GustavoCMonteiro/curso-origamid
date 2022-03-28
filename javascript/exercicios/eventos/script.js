const botao = document.querySelector('.botao');


function mostrar(){
  const texto = document.querySelector('.texto');
  texto.classList.toggle('ativar')
}

botao.addEventListener('click', mostrar);

function coordMouse(event){
  const coord = {
    x: event.x,
    y: event.y,
  }
  console.log(coord)
}

window.addEventListener('mousemove', coordMouse);

function scroll(){
  console.log('Usou o Scroll');
}

window.addEventListener('scroll', scroll)