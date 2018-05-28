$(function () {
    var slider = $("#slider_bottom").slider({
    range: "min",     
    value: 20,
    min: 0,
    max: 100,
    step: 1,
      
        slide: function(event, ui) {
            $(ui.handle).find('.tooltip_bottom').text(ui.value).append("%");
        },
        create: function(event, ui) {
          var tooltip_bottom = $('<div class="tooltip_bottom"></div>');
          
          $(event.target).find('.ui-slider-handle').append(tooltip_bottom);
        },
        change: function(event, ui) {
                  $('#hidden_bottom').attr('value', ui.value);
                  }
        });
});

/*$(document).ready(function(){
    var menuState = 'close';
    $('.ui-slider-handle').click(function(){
        if(menuState == 'close'){
        $('.grafico_energia').addClass('open');
        menuState = 'Open';
      }
      else{
        $('.grafico_energia').removeClass('open');
        menuState = 'close';
      }
    });
});*/

$(document).ready(function(){

    $('.ui-slider-handle').click(function(){
        $(".grafico_energia").addClass('open');
    });

    $('#back_energy_counter').click(function(){
        $(".grafico_energia").fadeOut();
        $("#back_energy_counter").fadeOut();
        $(".energy_counter").show();
    });

    $('.ui-slider-handle.ui-state-default.ui-corner-all').click(function(){
        $(".grafico_energia").show();
        $(".energy_counter").hide();
    });



  });

