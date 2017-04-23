$( document ).ready(function() {
    $( ".single-job" ).each(function( index ) {
    	var elementHeight = $(this).height();
    	$(this).find('.right').css('margin-top', $(this).height()/2);
	});


    $('.icon a').click(function(){
    	if(!$('#navigation').hasClass('responsive')) {
    		$('#navigation').addClass("responsive");
    	}
    	else {
    		$('#navigation').removeClass("responsive");
    	}
    });

	$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
});
});
