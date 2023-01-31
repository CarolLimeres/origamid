// selecionar o botao
const botao = document.querySelector("button");

function somar() {
  // selecionar a div:
  const div = document.querySelector("div");
  // p pegar o valor da div e somar
  // innerHTML: se essa div tivesse outros valores html dentro dela ele iria retornar esse html tb
  // innerText: nao ia retornar nenhuma tag html, só texto msm
  // e tenho que transformar em numero pq ta como string (com o number())
  const total = Number(div.innerText) + 1;

  if (total < 10) {
    // pra trocar o valor da div (e continuar somando):
    div.innerText = total;
  } else {
    console.log("vc passou o limite");
  }
}

// só vai executar se existir o botao
if (botao) {
  botao.addEventListener("click", somar);
}
