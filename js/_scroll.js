$(document).ready(function(){
	
	$(window).on('resize scroll', function() {

      	$('[data-menuitem]').each(function(key, value){
		 	
		 	var elementWrap = $(value);
		    
		    var topOfElement = elementWrap.offset().top;
		    var bottomOfElement = elementWrap.offset().top + elementWrap.outerHeight();
		    var bottomOfScreen = $(window).scrollTop() + window.innerHeight;
		    var topOfScreen = $(window).scrollTop();

		    if((bottomOfScreen > topOfElement) && (topOfScreen < bottomOfElement)){
    			$(".menuIsActive").removeClass("menuIsActive");
		      	$('#' + elementWrap.attr("data-menuitem")).addClass('menuIsActive');
		    } else {
		       	$('#' + elementWrap.attr("data-menuitem")).removeClass('menuIsActive');
		    }
      	})
	});

});