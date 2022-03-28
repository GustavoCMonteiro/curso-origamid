const botao = document.querySelector('.botao');
const div = document.querySelector('.div');

function clickbotao(){
  const total = Number(div.innerText) + 1;
  if(total < 10) {
    div.innerText = total
  } else {
    console.log('não posso adicionar mais')
  }

}

if (botao){
botao.addEventListener('click', clickbotao);
}