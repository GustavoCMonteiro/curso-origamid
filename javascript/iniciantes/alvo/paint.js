const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");
const input = document.querySelector("input");

pincel.fillStyle = "#CCCCCC";
pincel.fillRect(0, 0, 600, 400);

let desenha = false;

tela.onmousemove = function (evento) {
  let x = evento.pageX - tela.offsetLeft;
  let y = evento.pageY - tela.offsetTop;

  if (desenha && evento.shiftKey) {
    pincel.fillStyle = "#CCCCCC";
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();
  }
  if (desenha && !evento.shiftKey) {
    pincel.fillStyle = input.value;
    pincel.beginPath();
    pincel.arc(x, y, 5, 0, 2 * 3.14);
    pincel.fill();
  }
};

tela.onmousedown = function () {
  desenha = true;
};

tela.onmouseup = function () {
  desenha = false;
};
