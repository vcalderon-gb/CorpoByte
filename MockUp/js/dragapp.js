
/* buy commercial license for BLOCKS here http://demo.bootstraptor.com/index.html 
http://www.bootstraptor.com/


--------------------------------------------------------------------
 LICENSE:
 
 You can use this product for built templates in any commercial 
 projects for your clients and/or your own sites
 
You can't:
--------------------------------------------------------------------
- resell the product or parts of the finished product as a whole bundle,
- share or provide a product for free download on any site
- Create of a themes for CMS for sale on markets or your own sites
- Create of a html templates for sale on markets or your own sites
- use BLOCKS drag-n-driop application code or any code portion, 
  to generate your applications, 
- publish BLOCKS drag-n-driop application code or any code portion

PLEASE DO NOT COPY, PUBLISH THIS CODE OR ANY PARTS OF THIS CODE


*/
$('.box-layer').prepend('<button class="remove-block btn btn-danger btn-sm" title="remove block"><i class="fa fa-times"></i></button>');


function handleCarouselIds() {
	var e = $(".demo #myCarousel");
	var t = randomNumber();
	var n = "carousel-" + t;
	e.attr("id", n);
	e.find(".carousel-indicators li").each(function(e, t) {
		$(t).attr("data-target", "#" + n)
	});
	e.find(".left").attr("href", "#" + n);
	e.find(".right").attr("href", "#" + n)
}


function handleTabsIds() {
	var e = $(".demo #myTabs");
	var t = randomNumber();
	var n = "tabs-" + t;
	e.attr("id", n);
	e.find(".tab-pane").each(function(e, t) {
		var n = $(t).attr("id");
		var r = "panel-" + randomNumber();
		$(t).attr("id", r);
		$(t).parent().parent().find("a[href=#" + n + "]").attr("href", "#" + r)
	})
}

function handleAccordionIds() {
	var e = $(".demo #myAccordion");
	var t = randomNumber();
	var n = "accordion-" + t;
	var r;
	e.attr("id", n);
	e.find(".panel").each(function(e, t) {
		r = "accordion-element-" + randomNumber();
		$(t).find(".accordion-toggle").each(function(e, t) {
			$(t).attr("data-parent", "#" + n);
			$(t).attr("href", "#" + r)
		});
		$(t).find(".panel-collapse").each(function(e, t) {
			$(t).attr("id", r)
		})
	})
}

function handleCountdown(){
	$('#countdown').countdown('2014/12/12', function(event) {
		$(this).html(event.strftime('%w weeks %d days <br /> %H:%M:%S'));
	});
}
function handleCarousel2(){
	$('#myCarousel-2').carousel({
					interval:  2000
				});
				
			
			var clickEvent = false;
			$('#myCarousel-2').on('click', '.nav a', function() {
					clickEvent = true;
					$('#myCarousel-2 .nav li').removeClass('active');
					$(this).parent().addClass('active');		
			}).on('#myCarousel-2 slide.bs.carousel', function(e) {
				if(!clickEvent) {
					var count = $('#myCarousel-2 .nav-carousel').children().length -1;
					var current = $('#myCarousel-2 .nav-carousel li.active');
					current.removeClass('active').next().addClass('active');
					var id = parseInt(current.data('slide-to'));
					if(count == id) {
						$('#myCarousel-2 .nav-carousel li').first().addClass('active');	
					}
				}
				clickEvent = false;
			});
}

function handleParallax(){
	$(function(){
			$.stellar({
				horizontalScrolling: false,
				verticalOffset: 40
			});
		});
}

function handleJsIds() {
	handleAccordionIds();
	handleCarouselIds();
	handleCarousel2();
	handleTabsIds();
	handleCountdown();
	handleParallax();
}


function randomNumber() {
	return randomFromInterval(1, 1e6)
}
function randomFromInterval(e, t) {
	return Math.floor(Math.random() * (t - e + 1) + e)
}

var currentDocument = null;
var timerSave = 1000;
var stopsave = 0;
var startdrag = 0;
var demoHtml = $(".demo").html();
var currenteditor = null;

$(window).resize(function() {
	$("body").css("min-height", $(window).height() - 90);
	$(".demo").css("min-height", $(window).height() - 160)
});

function initContainer(){
	$(".demo").sortable({
		connectWith: ".box-layer",
		opacity: .65,
		handle: ".drag", 
		placeholder: 'placeholder',
		 refreshPositions: true,
		
		 
		 
		
		start: function(e,t) {
			
		},
		
		drag: function(e, t) {
			
			t.helper.height(100).width(100); 
			

		},
		stop: function(e,t) {
			
		}
		
	});
	
	

}

/*$("body").css("min-height", $(window).height() - 90);
	$(".demo").css("min-height", $(window).height() - 160);*/
	
	$(".box-layer").draggable({
		//appendTo: '.appendix',
		connectToSortable: ".demo",
		placeholder: "placeholder",
		helper: "clone",
		handle: ".drag",
		containment: 'demo',
		refreshPositions: true,
		scroll: true,
		start: function(e,t) {
			$('.demo .info-tip').remove();
			/*$(this).css('z-index', '1020');*/
		},
		
		drag: function(e,t) {
			t.helper.width(100);
			t.helper.height(100);
			

		},
		stop: function(e,t) {
		
			
					//var settingButton = '<button class="settings-block  btn btn-primary btn-sm"><i class="fa fa-cogs"></i></button>';
					//$('.box-layer').prepend(settingButton);
					//$(settingButton).removeClass('editable');
					$('.demo').find('.preview-layer-img').remove();
					$('.demo .remove-block').click( function(){
						$(this).parent().remove();
					});
					$('.demo').find('p').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('h1').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('h2').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('h3').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('h4').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('h5').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('h6').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('li').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('a:not(.carousel-control)').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('a.go-to-content').attr('contenteditable', 'false').removeClass('editable');
					$('.demo').find('address').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('blockquote').attr('contenteditable', 'true').addClass('editable'); 
					$('.demo').find('button').attr('contenteditable', 'true').addClass('editable'); 
					$('.demo').find('input[type=submit]').attr('contenteditable', 'true').addClass('editable'); 
					$('.demo a, .demo button, .demo input').click( function(event){
						event.preventDefault(event);
					});
		
		
					$('.settings-block').bind('click', function(event){
							event.preventDefault(event);
								var block = $(this).parent().attr('id', 'this-preview');
								

								var paddingTop = $(block).attr('style', 'padding-top');
								var paddingBottom = $(block).attr('style', 'padding-bottom');
								var marginTop = $(block).attr('style', 'margin-top');
								var marginBottom = $(block).attr('style', 'margin-bottom');
								var color = $(block).attr('style', 'color');
								
								$.fn.getBg = function() {
									return $(block).filter(function() {
										// only checking for IE and Firefox/Chrome. add values as cross-browser compatibility is required
										var color = $(this).css('background-color');
										return color != 'transparent' && color != 'rgba(0, 0, 0, 0)';
									}).eq(0).css('backround-color');
								};
								
								$('.demo2').colorpicker().on('changeColor', function(ev){
								  var bg = ev.color.toHex();
								  console.log(bg);
								  $(block).css('background-color', bg);
								});
								
								$.fn.getColor = function() {
									return $(block).filter(function() {
										// only checking for IE and Firefox/Chrome. add values as cross-browser compatibility is required
										var color = $(this).css('color');
										return color != 'transparent' && color != 'rgba(0, 0, 0, 0)';
									}).eq(0).css('color');
								
								};
								
								$('.demo3').colorpicker().on('changeColor', function(ev){
								  var color = ev.color.toHex();
								  console.log(color);
								  $(block).css('color', color);
								});
								
								$('#modal-container-453162').modal('show');
								var paddingTopNew = $('#modal-container-453162').find('#paddingTopNew');
								var paddingBottomNew = $('#modal-container-453162').find('#paddingBottomNew');
								var marginBottomNew = $('#modal-container-453162').find('#marginBottomNew');
								var marginTopNew = $('#modal-container-453162').find('#marginTopNew');
								
								
								$('#modal-container-453162 .close-this').bind('click', function(){
									
									$(block).attr('id', '');
								});
								
								/*$(paddingTopNew).val(paddingTop);*/
								/*$(paddingTopNew).val(paddingTop);
								$(paddingBottomNew).val(paddingBottom);
								$(marginTopNew).val(marginTop);
								$(marginBottomNew).val(marginBottom);
								*/
								
								 if ($(paddingTop).length != 0) {
										
										var paddingTopNewVal = $(this).val();
										console.log(paddingTop);
									  } else {
										console.log(paddingTop + 'padding-top not set');
									  }
								
								$(paddingTopNew).bind('change', function(){
									var paddingTopNewVal = $(this).val();
									$(block).css('padding-top' ,  paddingTopNewVal + 'px' );
								});
								$(paddingBottomNew).bind('change', function(){
									var paddingBottomNewVal = $(this).val();
									$(block).css('padding-bottom' , paddingBottomNewVal + 'px');
								});
								
								$(marginTopNew).bind('change', function(){
									var marginTopNewVal = $(this).val();
									$(block).css('margin-top' , marginTopNewVal + 'px');
								});
								$(marginBottomNew).bind('change', function(){
									var marginBottomNewVal = $(this).val();
									$(block).css('margin-bottom' , marginBottomNewVal + 'px' );
								});
								
		
								
						});
					
					
					
					
					
						var editor = new MediumEditor('.editable', {
							buttonLabels: 'fontawesome',
							disableReturn: true,
							 anchorInputPlaceholder: 'Type a link',
							 buttons: ['bold', 'italic', 'quote', 'underline', 'link']
						});
						
	
		
					/*	function startedit(){
					$(document).delegate( function(){
					$('.demo').find('p').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('h1').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('h2').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('h3').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('h4').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('h5').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('h6').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('li').attr('contenteditable', 'true').addClass('editable');
					$('.demo').find('a').attr('contenteditable', 'true').addClass('editable');
					
						var editor = new MediumEditor('.editable', {
							buttonLabels: 'fontawesome'
						});
					});
				};
				
				
				function stopedit(){
					$('.demo').find('.editable').attr('data-medium-element', 'false');
					$('.demo').find('.editable').removeClass('editable').attr('contenteditable', 'false');		
							
						
					
				};
				
	$('#edittext').click( function(e){
		event.preventDefault();
		$(this).addClass('active');
		startedit();
			$(this).click( function(e){
				event.preventDefault();
				stopedit();
				$(this).removeClass('active');
			})
	});*/
	
					/* END Wysiwyg */
					handleJsIds();
					var scriptdata = $('.demo').find('.script-data').html();
					var scriptbox = $('#myScripts').html();
					if(localStorage){
						//Set the name, age and colour items
						localStorage.setItem('jsitem' , scriptdata);
					    }
					    //Alert the user to upgrade their browser
					    else {
						alert('Local storage not supported. Please get a proper browser');
					    }
					    
					$(scriptbox).append(scriptdata);
					$('.demo .script-data').remove();
					$('.demo .info-tip').remove();
					
						
					


					$('.demo .box-layer').dblclick(function() {
						
						var editHtml = $(this).attr('id', 'preview');
						$(this).find('.remove-block').remove();
						$(this).find('.drag').remove();
						$(this).find('.settings-block').remove();
						
	
						var myContent = $.htmlClean($(this).html(), {
								format: true,
								allowedAttributes: [
									["id"],
									["class"],
									["data-toggle"],
									["data-target"],
									["data-parent"],
									["role"],
									["data-dismiss"],
									["aria-labelledby"],
									["aria-hidden"],
									["data-slide-to"],
									["data-slide"],
									["pre"],
									["aria-valuenow"],
									["aria-valuemin"],
									["aria-valuemax"],
									["style"],
									["src"],
									["data-stellar-background-ratio"],
									["data-filter"]
									
								]
							});;
						
						
						//var myContent = $(editHtml).html();
						var editorhtml = ace.edit("editorhtml");
						ace.require("ace/ext/language_tools");
						ace.require("ace/ext/emmet");
						editorhtml.container.style.height = "400px"
						editorhtml.setFontSize("14px")
						editorhtml.setTheme("ace/theme/chrome");
						editorhtml.session.setMode("ace/mode/html");
						editorhtml.setValue(myContent);
						$('#html-editor-modal').modal('show');
						function updatePreview() {
						    var preview =  document.getElementById('preview').innerHTML=editorhtml.getValue();
						   editHtml.attr('id', '');
						   $(editHtml).prepend('<button class="remove-block btn btn-danger btn-sm" title="remove block"><i class="fa fa-times"></i></button>'); 
						   $(editHtml).prepend('<span class="drag"><i class="fa fa-arrows"></i></span>'); 
						  // $(editHtml).prepend('<button class="settings-block  btn btn-primary btn-sm"><i class="fa fa-cogs"></i></button>');
						 	$('.demo .remove-block').click( function(){
								$(this).parent().remove();
							});
							$('.demo').find('settings-block').removeClass('editable');
							$('.demo').find('p').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('h1').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('h2').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('h3').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('h4').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('h5').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('h6').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('li').attr('contenteditable', 'true').addClass('editable');
							
							$('.demo').find('a:not(.carousel-control)').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('a.go-to-content').attr('contenteditable', 'false').removeClass('editable');
							$('.demo').find('address').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('blockquote').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('button').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('input[type=submit]').attr('contenteditable', 'true').addClass('editable');
							
								$('.settings-block').bind('click', function(event){
							event.preventDefault(event);
								var block = $(this).parent();
								var paddingTop = $(block).attr('style', 'padding-top');
								var paddingBottom = $(block).attr('style', 'padding-bottom');
								var marginTop = $(block).attr('style', 'margin-top');
								var marginBottom = $(block).attr('style', 'margin-bottom');
								
								
								$('.demo2').colorpicker().on('changeColor', function(ev){
								  var bg = ev.color.toHex();
								  console.log(bg);
								  $(block).css('background', bg);
								});
								
								$.fn.getColor = function() {
									return $(block).filter(function() {
										// only checking for IE and Firefox/Chrome. add values as cross-browser compatibility is required
										var color = $(this).css('color');
										return color != 'transparent' && color != 'rgba(0, 0, 0, 0)';
									}).eq(0).css('color');
								};
								
								$('.demo3').colorpicker().on('changeColor', function(ev){
								  var color = ev.color.toHex();
								  console.log(color);
								  $(block).css('color', color);
								});
								
								$('#modal-container-453162').modal('show');
								var paddingTopNew = $('#modal-container-453162').find('#paddingTopNew');
								var paddingBottomNew = $('#modal-container-453162').find('#paddingBottomNew');
								var marginBottomNew = $('#modal-container-453162').find('#marginBottomNew');
								var marginTopNew = $('#modal-container-453162').find('#marginTopNew');
								/*$(paddingTopNew).val(paddingTop);*/
								/*$(paddingTopNew).val(paddingTop);
								$(paddingBottomNew).val(paddingBottom);
								$(marginTopNew).val(marginTop);
								$(marginBottomNew).val(marginBottom);
								*/
								
								
								$(paddingTopNew).bind('change', function(){
									var paddingTopNewVal = $(this).val();
									$(block).css('padding-top' ,  paddingTopNewVal + 'px' );
								});
								$(paddingBottomNew).bind('change', function(){
									var paddingBottomNewVal = $(this).val();
									$(block).css('padding-bottom' , paddingBottomNewVal + 'px');
								});
								
								$(marginTopNew).bind('change', function(){
									var marginTopNewVal = $(this).val();
									$(block).css('margin-top' , marginTopNewVal + 'px');
								});
								$(marginBottomNew).bind('change', function(){
									var marginBottomNewVal = $(this).val();
									$(block).css('margin-bottom' , marginBottomNewVal + 'px' );
								});
								
		
								
						});
							
								var editor = new MediumEditor('.editable', {
									buttonLabels: 'fontawesome',
									disableReturn: true,
								 anchorInputPlaceholder: 'Type a link',
								 buttons: ['bold', 'italic', 'quote', 'underline', 'link']
								});
								
								$('#html-editor-modal').modal('hide');
						}
						$("#save-code").click( function() {
							
							//var newCode = editorhtml.getValue();
							//$(editHtml).html(newCode);
							updatePreview();
							
						});
						
						function canselPreview() { 
						   editHtml.attr('id', '');
						   $(editHtml).prepend('<button class="remove-block btn btn-danger btn-sm" title="remove block"><i class="fa fa-times"></i></button>'); 
						   $(editHtml).prepend('<span class="drag"><i class="fa fa-arrows"></i></span>'); 
						  //  $(editHtml).prepend('<button class="settings-block  btn btn-primary btn-sm"><i class="fa fa-cogs"></i></button>');
						
							$('.demo .remove-block').click( function(){
								$(this).parent().remove();
							});
							
						   $('.demo').find('p').attr('contenteditable', 'true').addClass('editable');
						   $('.demo').find('settings-block').removeClass('editable');
							$('.demo').find('h1').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('h2').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('h3').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('h4').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('h5').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('h6').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('li').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('a:not(.carousel-control)').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('a.go-to-content').attr('contenteditable', 'false').removeClass('editable');
							
							$('.demo').find('address').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('blockquote').attr('contenteditable', 'true').addClass('editable');
							$('.demo').find('button').attr('contenteditable', 'true').addClass('editable');
							
								$('.settings-block').bind('click', function(event){
							event.preventDefault(event);
								var block = $(this).parent();
								var paddingTop = $(block).attr('style', 'padding-top');
								var paddingBottom = $(block).attr('style', 'padding-bottom');
								var marginTop = $(block).attr('style', 'margin-top');
								var marginBottom = $(block).attr('style', 'margin-bottom');
								
								
								$('.demo2').colorpicker().on('changeColor', function(ev){
								  var bg = ev.color.toHex();
								  console.log(bg);
								  $(block).css('background', bg);
								});
								
								$.fn.getColor = function() {
									return $(block).filter(function() {
										// only checking for IE and Firefox/Chrome. add values as cross-browser compatibility is required
										var color = $(this).css('color');
										return color != 'transparent' && color != 'rgba(0, 0, 0, 0)';
									}).eq(0).css('color');
								};
								
								$('.demo3').colorpicker().on('changeColor', function(ev){
								  var color = ev.color.toHex();
								  console.log(color);
								  $(block).css('color', color);
								});
								
								$('#modal-container-453162').modal('show');
								var paddingTopNew = $('#modal-container-453162').find('#paddingTopNew');
								var paddingBottomNew = $('#modal-container-453162').find('#paddingBottomNew');
								var marginBottomNew = $('#modal-container-453162').find('#marginBottomNew');
								var marginTopNew = $('#modal-container-453162').find('#marginTopNew');
								/*$(paddingTopNew).val(paddingTop);*/
								/*$(paddingTopNew).val(paddingTop);
								$(paddingBottomNew).val(paddingBottom);
								$(marginTopNew).val(marginTop);
								$(marginBottomNew).val(marginBottom);
								*/
								
								
								$(paddingTopNew).bind('change', function(){
									var paddingTopNewVal = $(this).val();
									$(block).css('padding-top' ,  paddingTopNewVal + 'px' );
								});
								$(paddingBottomNew).bind('change', function(){
									var paddingBottomNewVal = $(this).val();
									$(block).css('padding-bottom' , paddingBottomNewVal + 'px');
								});
								
								$(marginTopNew).bind('change', function(){
									var marginTopNewVal = $(this).val();
									$(block).css('margin-top' , marginTopNewVal + 'px');
								});
								$(marginBottomNew).bind('change', function(){
									var marginBottomNewVal = $(this).val();
									$(block).css('margin-bottom' , marginBottomNewVal + 'px' );
								});
								
		
								
						});
							
								var editor = new MediumEditor('.editable', {
									buttonLabels: 'fontawesome',
									disableReturn: true,
								 anchorInputPlaceholder: 'Type a link',
								 buttons: ['bold', 'italic', 'quote', 'underline', 'link']
								});
							
						}
						
						$('#canselthis').bind( 'click', function(){
							canselPreview();
						});
			

    

	
						
							/*$('#save-code').bind('click', function() {
							
							var newCode = editorhtml.getValue();
							$(editHtml).html(newCode);
							console.log(newCode);
						});*/
						
						//editorhtml.getSession().on('change', function(e) {
						    // e.type, etc
						   // event.preventDefault();
						  //  var newCode = editorhtml.getValue();
						  //  $(editHtml).remove();
						  //  console.log(newCode);

						//});
					
							
					});
				}
		
		
		
	});

	
	initContainer();
	
	
	
	$('#getcode').click( function(event){
		event.preventDefault(event);
		var clearcode = $('.demo').html();
		$('#savecode').html('');
		$('#savecode').append(clearcode);
		$('#savecode').find('.drag').remove();
		$('#savecode').find('.remove-block').remove();
		$('#savecode').find('.settings-block').remove();
		
		$('#savecode').find('.box-layer').removeClass('box-layer');
		$('#savecode').find('.ui-draggable').removeClass('ui-draggable');
		$('#savecode').find('.hide-in-sidebar').removeClass('hide-in-sidebar');
		$('#savecode').find('.medium-editor-placeholder').removeClass('medium-editor-placeholder');
		$('#savecode').find('.editable').removeClass('editable');
		$('#savecode').find('.parallax-layer').removeAttr('style');
		
	
	  
		var formatSrc = $.htmlClean($('#savecode').html(), {
		format: true,
		allowedAttributes: [
			["id"],
			["class"],
			["data-toggle"],
			["data-target"],
			["data-parent"],
			["role"],
			["data-dismiss"],
			["aria-labelledby"],
			["aria-hidden"],
			["data-slide-to"],
			["data-slide"],
			["pre"],
			["aria-valuenow"],
			["aria-valuemin"],
			["aria-valuemax"],
			["style"],
			["src"],
			["data-stellar-background-ratio"],
			["data-filter"]
			
			
		]
	});
	
				/* prepend header of a new html */
				
				var selected_styles = $('#stylesChange').attr('href');
				var body_style = $('.demo').attr('style');
				var g_fonts = $('#g-fonts').attr('href');
				var base_tpl =
				"<!doctype html>\n" +
				"<html lang=\"en\">\n" +
			      "<head>\n\t\t" + 
			      "\n<meta charset=\"utf-8\">\n" +
			      "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
			      "<meta content=\"width=device-width, initial-scale=1, maximum-scale=1\" name=\"viewport\">" +
			      "\n<title>Test page</title>\n\n" +
			      "<link href=\" "+ selected_styles + "\" rel=\"stylesheet\">\n" +
			      "<link href=\"http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css\" rel=\"stylesheet\">\n" +
			      "<link href=\""+ g_fonts + "\" rel=\"stylesheet\">\n" +
			      "<link href=\"assets/css/sections-frmwrk-styles.css\" rel=\"stylesheet\">\n" +
				"<style> \n body \{\n\t\t" + body_style + "\n\}\n<\/style>\n" +
			      "\n</head>\n\t" +
			      "<body>\n\t\n\t";
			      
			      var bottom_appendix =
			      "\n\n<script src=\"https://code.jquery.com/jquery-1.10.2.min.js\"></script>\n" +
			      "<script src=\"http://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js\"></script>\n" +
			      "<script src=\"assets/js/jquery.countdown.min.js\" type=\"text/javascript\"></script>\n" +
			      "<script src=\"assets/js/jquery.fitvids.min.js\" type=\"text/javascript\"></script>\n" +
			      "<script src=\"assets/js/jquery.waitforimages.js\" type=\"text/javascript\"></script>\n" +
			      "<script src=\"assets/js/jquery.isotope.min.js\" type=\"text/javascript\"></script>\n" +
			      "<script src=\"assets/js/stellar.js\" type=\"text/javascript\"></script>\n" +
			      "<script src=\"assets/js/custom-scripts.js\" type=\"text/javascript\"></script>\n" +
			      "\n</body>\n" +
			      "</html>";
			      
			      var htmlready = base_tpl + formatSrc + bottom_appendix;
											
						var editorhtmlget = ace.edit("editorhtmlget");
						ace.require("ace/ext/language_tools");
						ace.require("ace/ext/emmet");
						editorhtmlget.container.style.height = "400px"
						editorhtmlget.setFontSize("14px")
						editorhtmlget.setTheme("ace/theme/chrome");
						editorhtmlget.session.setMode("ace/mode/html");
							editorhtmlget.setOptions({
								enableBasicAutocompletion: true,
								enableSnippets: true,
								enableEmmet: true
							});
						editorhtmlget.setValue(htmlready);
						
						
						
						$('#html-editor-modal-get').modal('show');
		
	});
	
	
	
		$('.bootswatch a').click( function(event){
		event.preventDefault(event);
		event.stopPropagation(event);
	
			var styleLink = $(this).next().find('input');
			var styleVal = $(styleLink).attr('value');
			var basicStyles = $('#stylesChange');
			console.log(styleVal);
			$(basicStyles).attr('href', 'http:' +styleVal );
			
			
		});
		
	$('.demo a, .demo button').click( function(event){
		event.preventDefault(event);
		});
							
	/* buy commercial license for BLOCKS here http://demo.bootstraptor.com/index.html 
http://www.bootstraptor.com/


--------------------------------------------------------------------
 LICENSE:
 
 You can use this product for built templates in any commercial 
 projects for your clients and/or your own sites
 
You can't:
--------------------------------------------------------------------
- resell the product or parts of the finished product as a whole bundle,
- share or provide a product for free download on any site
- Create of a themes for CMS for sale on markets or your own sites
- Create of a html templates for sale on markets or your own sites
- use BLOCKS drag-n-driop application code or any code portion, 
  to generate your applications, 
- publish BLOCKS drag-n-driop application code or any code portion

PLEASE DO NOT COPY, PUBLISH THIS CODE OR ANY PARTS OF THIS CODE


*/