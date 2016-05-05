(function($){

	$.fn.visible = function(partial){

	    var $t				= $(this),
	    	$w				= $(window),
	    	viewTop			= $w.scrollTop(),
	    	viewBottom		= viewTop + $w.height(),
	    	_top			= $t.offset().top,
	    	_bottom			= _top + $t.height(),
	    	compareTop		= partial === true ? _bottom : _top,
	    	compareBottom	= partial === true ? _top : _bottom;

		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
    
})(jQuery);

$(window).scroll(function(){
  if( $('.html').visible(true) ) {
    $('.html').addClass('html5');
	$('.css').addClass('css3');
	$('.java').addClass('javascript');
	$('.ph').addClass('php');
  }
  else {
    $('.html').removeClass('html5');
	$('.css').removeClass('css3');
	$('.java').removeClass('javascript');
	$('.ph').removeClass('php');
  }
});

/* STEP 2a - DOM ready*/
			$(function() {
				//alert("DOM ready");
				
				/* STEP 2b - script to add class to nav when header is scrolled off screen */
				// Persistent navigation
				/*Determine how far down the top of the navigation when header is scrolled off screen*/
				var navTop = $('#floatingbar').offset().top;
				console.log(navTop);
				//capture window scroll event
				$(window).scroll(function(){
					//console.log("Scrolling nav...");
					
				if ($(window).scrollTop() > navTop){
					$('#floatingbar').addClass('floater');
					/* STEP 6c - sticky footer button appear */
					$('footer a.top').fadeIn(150);
					}else{
						$('#floatingbar').removeClass('floater');
						$('footer a.top').fadeOut(150);
					}
				});
				
						
						/* STEP 6d - sticky footer button dissappear */
				/* STEP 6e - click handler to animate scroll to top */
				$('footer a.top').click(function(event){
					/* stop default anchor behavior */
					event.preventDefault();
					$('body').animate({scrollTop: 0}, 600);
				});
				/* STEP 3 - script to duplicate pullquote text */
				$('span.pullquote').each(function(){
            var parentElem = $(this).parent('p');
            // Clone span element inside it, add special class, insert new p before paarent p
            $(this).clone().addClass('pullquote2').prependTo(parentElem);
        });
				// Pullquotes
			
			// end DOM ready
			});