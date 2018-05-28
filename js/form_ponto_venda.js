$(document).ready(function(){
   

 $(document).on("click","#enviar2",function() { 
       
        $('#form5').addClass('desaparece') ;
        $('#quadrado_foto_check').addClass('aparece');
       
    });
 $(document).on("click",".pedir",function() { 
       
        $('.mapa_ponto_venda').addClass('desaparece') ;
        $('.pedir_ponto_venda').addClass('aparece');
       
    });
 $(document).on("click",".botao",function() { 
       
        $('.ponto_venda_mobile').addClass('desaparece') ;
        $('.mapa_ponto_venda').addClass('desaparece') ;
         $('.ponto_venda_mobile').addClass('desaparece') ;
        $('.pedir_ponto_venda').addClass('aparece');
       
    });
});



