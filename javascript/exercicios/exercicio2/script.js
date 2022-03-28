const circle = document.querySelector('.circle');

function mouseM(event){
  circle.style.top = event.y + 'px';
  circle.style.left = event.x + 'px';
}


window.addEventListener('mousemove', mouseM)