const links = document.querySelectorAll("nav a");

// função p extrair o href de cada elemento:
// dentro da função eu tenho acesso ao link específico
function ativarLink(link) {
  const href = link.href;
  // dentro do location ele tem diferentes informações do url da pagina e uma delas é o href, que da direto pra gente o caminho completo:
  const url = document.location.href;

  if (href === url) {
    link.style.backgroundColor = "black";
    link.style.color = "white";
    // assim mostra em qual pag vc ta
  }

  console.log(url);
  console.log(href);
}

links.forEach(ativarLink);
