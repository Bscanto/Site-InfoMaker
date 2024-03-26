// paragrafos

const paragrafos = document.querySelectorAll(".paragrafos button");

function ativaParagrafo(event) {
  const paragrafo = event.currentTarget;
  const controls = paragrafo.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  paragrafo.setAttribute("aria-expanded", ativa);
}

function eventosParagrafos(paragrafo) {
  paragrafo.addEventListener("click", ativaParagrafo);
}

paragrafos.forEach(eventosParagrafos);
//-------------------------------------------------------------------//