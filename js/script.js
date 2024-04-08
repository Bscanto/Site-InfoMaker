// paragrafos
onload= function(){
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
}

//-------------------------------------------------------------------//

// SLIDER CARDS PROFESSORES //
jQuery(document).ready(function(){

	jQuery(function(){
		jQuery('a.prev').click(function (){

			jQuery('#slids > :first-child').fadeIn(700);
			jQuery('#slids > :last-child').fadeOut(700);
			setTimeout( function(){
				jQuery('#slids > :last-child').prependTo('#slids');
			}, 700);
		});

		jQuery('a.next').click(function (){

			jQuery('#slids > :first-child').fadeIn(700);
			jQuery('#slids > :nth-child(2)').fadeOut(700);
			setTimeout( function(){
				jQuery('#slids > :first-child').appendTo('#slids');
			}, 700);
		});
	});
});


//------------------------------------------------//
//Slides Oficinas
const slids = document.querySelectorAll(".slide");

for (const slide of slids) {
  slide.addEventListener("click", () => {
    clearActive();
    slide.classList.add("active");
  });
}

function clearActive() {
  slids.forEach((slide) => {
    slide.classList.remove("active");
  });
}


//-----------------------------------------------//

jQuery(document).ready(function() {
  $('#formulario-contato').submit(function(event) {
      event.preventDefault(); 
      var formData = $(this).serialize(); 
      $.ajax({
          type: 'POST',
          url: $(this).attr('action'), 
          data: formData,
          success: function(response) {
            
              console.log('Mensagem enviada com sucesso!');
              alert('Mensagem enviada com sucesso!');
              $('#formulario-contato')[0].reset(); 
          },
          error: function(xhr, status, error) {
            
              console.error('Erro ao enviar mensagem:', error);
              alert('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
          }
      });
  });
});