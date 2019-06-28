$(document).ready(function(){
	window.sticky = false;
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 0){
	$('.topbar').addClass("topbar--sticky");
	$('.logobar').css('marginTop',$(".topbar").outerHeight()+'px')
  } else {
	$('.topbar').removeClass("topbar--sticky");$('.logobar').css('marginTop',0)
	//$('.pagewrapper').css('paddingTop',0);
  }
  if ($(this).scrollTop() > ($('.logobar').outerHeight()  )){
	$('.navbar').addClass("navbar--sticky");
	$('.logobar').css('marginBottom',$('.navbar').outerHeight()+'px')
	$('.navbar').css("top",$('.topbar').outerHeight()+'px');
	//$('.logobar').css('marginTop',$(".topbar").outerHeight()+'px')
  } else {
	$('.navbar').removeClass("navbar--sticky");
	$('.logobar').css('marginBottom',0)
	$('.navbar').css("top",0);
	//$('.topbar').removeClass("topbar--sticky");$('.logobar').css('marginTop',0)
	//$('.pagewrapper').css('paddingTop',0);
  }
});