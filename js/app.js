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