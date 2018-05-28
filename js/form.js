$(document).ready(function(){
	$( "#formulario1" ).submit(function( event ) {
		$('.form_entrega').addClass('desaparece') && $('.formulario2').addClass('aparece');
  	event.preventDefault();
  	$("#formulario1").fadeOut();
});

});

$(document).ready(function(){
   $("#quadrado2").click(function(){
        $(".form_entrega").addClass('desaparece') && $('.formulario3').addClass('mostrar');;
    });
});

$(document).ready(function(){
	$( "#form_entrega3" ).submit(function( event ) {
		$('.formulario3').removeClass('mostrar') && $('.formulario2').addClass('aparece');
  	event.preventDefault();
  	
});

});

$(document).ready(function(){
   $('.btn_enviar, .btn_mais').click(function(){ 

        $(".mapa_consumo").addClass('open');
        $("#form2").removeClass('aparece');
        $("#form2").addClass('desaparece');
        $('.btn_enviar, .btn_mais').fadeOut();

    });


    $('#mapa_seta').click(function(){
         $(".form_entrega").removeClass("desaparece");
        $("#formulario_entrega").show();
        $("#formulario1").show();
    });


});

$(document).ready(function(){
   $('#mapa_seta').click(function(){
      $(".mapa_consumo").fadeOut();
      $("#mapa_seta").fadeOut();
    });
});
