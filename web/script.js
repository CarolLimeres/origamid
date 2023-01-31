// primeiro passo: qual elemento quero selecionar? quero selecionar a lista de imagens
// querySelectorAll pq quero selecionar vários elementos, entao ele vai retornar uma lista
const imagens = document.querySelectorAll("#galeria li img");

// sempre conferir se está tudo certinho com o console.log:
console.log(imagens);

function galeriaTrocar(event) {
  // quarto passo - preciso de uma forma de modificar a informação do item principal que quero modificar (no caso, a imagem maior, fora da li)
  // se eu quero modificar um item, eu tenho que selecionar ele:
  // apenas querySelector pq é uma imagem apenas
  const principal = document.querySelector("#imagem-principal");
  // terceiro passo - preciso tirar as informações que preciso:
  // qual informação eu preciso quando clico em uma imagem? preciso do src dela
  // ter acesso ao elemento que estou clicando:
  // com o currentTarget quando clico ele me da a imagem exata que cliquei:
  const clicada = event.currentTarget;
  // p mudar o src e o alt da imagem (p deixar a q eu cliquei em evidencia na parte de baixo):
  // outra forma de escrever o mesmo código (colocando manualmente o atributo que quero mudar pq as vezes pode nao aparecer): principal.setAttribute('alt', clicada.getAttribute('alt'))
  principal.src = clicada.src;
  principal.alt = clicada.alt;
  // só colocando clicada.src ele ja me da o caminho da imagem
  console.log(clicada.src);
}

// agora criar a função:
// função chamada galeriaClique que é pra adicionar o evento de clique pra galeria:
// aqui dentro vou ter acesso a cada uma das imagens uma por uma então coloco (imagem):
function galeriaClique(imagem) {
  // passar o evento de click e a função que vai ocorrer quando eu clicar na imagem:
  imagem.addEventListener("click", galeriaTrocar);
}

// segundo passo: como adiciono um evento a cada uma das imagens? com forEach
// no forEach posso passar uma função e nessa função vou ter acesso a cada uma das imagens especificamente
// primeiro chamar a função:
imagens.forEach(galeriaClique);
// galeriaClique vai ser ativado p cada uma das imagens e oq ta dentro dessa função vai ocorrer p cada uma das imagens que existem
