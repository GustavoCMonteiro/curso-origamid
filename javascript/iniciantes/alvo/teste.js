function desenhaQuadrado(x, y, tamanho, cor) {
  pincel.fillStyle = cor;
  pincel.fillRect(x, y, tamanho, tamanho);
  pincel.fill();
}

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
}

function desenhaPaletaDeCores() {
  desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, "red");
  desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, "green");
  desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, "blue");
}

function lidaComMovimentoDoMouse(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;

  if (desenha) {
    desenhaCirculo(x, y, 5, corAtual);
  }
}

function habilitaDesenhar() {
  desenha = true;
}

function desabilitaDesenhar() {
  desenha = false;
}

function trocarCor(evento) {
  var x = evento.pageX - tela.offsetLeft;
  var y = evento.pageY - tela.offsetTop;
  if(x < 50 && y < 50){
    corAtual = "red";
  } else if(x > 50 && x < 100 && y < 50) {
    corAtual = "green";
  } else if(x > 100 && x < 150 && y < 50) {
    corAtual = "blue";
  }
}

var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

var desenha = false;
var corAtual = "blue";
var xVermelho = 0;
var xVerde = 50;
var xAzul = 100;
var yQuadrados = 0;
var tamanhoQuadrados = 50;

desenhaPaletaDeCores(); // mostra os quadrados de seleção de cores

tela.onmousemove = lidaComMovimentoDoMouse;

tela.onmousedown = habilitaDesenhar;

tela.onmouseup = desabilitaDesenhar;

tela.onclick = trocarCor;