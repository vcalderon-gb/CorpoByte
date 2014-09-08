 // jQuery.noConflict();
$(document).ready(function() {
		$('.flecha_der').hover(function(){
			$('#juegos_header').stop();
			$('#juegos_header').animate({scrollLeft: "2000px"}, 7000);
		},function() { 
		    $('#juegos_header').stop();
		});
/***********************************************************************/
		$('.flecha_izq').hover(function(){
			$('#juegos_header').stop();
			$('#juegos_header').animate({scrollLeft: "0px"}, 7000);
		},function() { 
		    $('#juegos_header').stop();
		});
});