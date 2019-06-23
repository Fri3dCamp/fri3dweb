$(document).ready(function(){
	window.sticky = false;
});

$(window).scroll(function() {
	console.log(window.sticky);
  if ($(this).scrollTop() > $('.siteheader').outerHeight()-$(".testbar").outerHeight()){
	if (true != window.sticky) {
		window.sticky = true;
		//var oldscrolltop = $('.pagewrapper').offset().top;
    	$('body').addClass("stickyheader");
		$('.siteheader').css('paddingBottom',$(".testbar").outerHeight()+'px')
		//var newscrolltop = $('.pagewrapper').offset().top;
		console.log( $(".testbar").outerHeight()+'px' );
		//$('.pagewrapper').css('paddingTop',(oldscrolltop-newscrolltop));
	}
  } else {
    window.sticky = false;
    $('body').removeClass("stickyheader");
	$('.siteheader').css('paddingBottom',0)
	//$('.pagewrapper').css('paddingTop',0);
  }
});