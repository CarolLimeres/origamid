// agora pegar essas coordenadas e colocar no círculo
const circulo = document.querySelector("#circulo");

// eu quero o evento da função pq preciso das coordenadas do mouse (event)
function seguirMouse(event) {
  circulo.style.top = event.y + "px";
  circulo.style.left = event.x + "px";
}

window.addEventListener("mousemove", seguirMouse);
