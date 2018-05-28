$(document).ready(function(){
	
	$(window).on('resize scroll', function() {

		var topOfElementPlus = 300;

      	$('[data-menuitem]').each(function(key, value){
		 	
		 	var elementWrap = $(value);
		   
		    var topOfElement = (elementWrap.offset().top + topOfElementPlus);
		    var bottomOfElement = elementWrap.offset().top + elementWrap.outerHeight();
		    var bottomOfScreen = $(window).scrollTop() + window.innerHeight;
		    var topOfScreen = $(window).scrollTop();


		    var isVisible = false;
		   	if(elementWrap.css('display') == 'block'){
		       isVisible = true;
		    }

		    if((bottomOfScreen > (topOfElement )) && (topOfScreen < bottomOfElement) && isVisible){
		    	
		    	$(".menuIsActive").removeClass("menuIsActive");
		    	$(".menuIsActiveBlue").removeClass("menuIsActiveBlue");
		    	
		    	var currentDataMenuItem = elementWrap.attr('data-menuitem');

		    	if (currentDataMenuItem === "menu_item_analise") {
			    	$(".square_red").addClass("square_blue");
			    	$(".square_red").removeClass("square_red");
		    		$('#' + currentDataMenuItem).addClass('menuIsActiveBlue');
		    	} else {
		    		$(".square_blue").addClass("square_red");
			    	$(".square_blue").removeClass("square_blue");
		    		$('#' + currentDataMenuItem).addClass('menuIsActive');
		    	}  

		    	return false

		    } else {

		       	$('#' + currentDataMenuItem).removeClass('menuIsActive');
		       	$('#' + currentDataMenuItem).removeClass('menuIsActiveBlue');
		    }

      	})
	});

});