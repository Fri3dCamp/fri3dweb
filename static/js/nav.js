$(document).ready(function(){
	window.sticky = false;
	shufflenav();
});

$(window).resize(function() {
	shufflenav();
})

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
	$('.logobar').css('marginBottom',$('.navbar').outerHeight()+'px');
	if ( $(window).width() > 620 ) {
		$('.navbar').css("top",$('.topbar').outerHeight()+'px');
	} else {		
		$('.navbar').css("top",'');
	}
	//$('.logobar').css('marginTop',$(".topbar").outerHeight()+'px')
  } else {
	$('.navbar').removeClass("navbar--sticky");
	$('.logobar').css('marginBottom',0);
	if ( $(window).width() > 620 ) {		
		$('.navbar').css("top",'');
	}
	//$('.topbar').removeClass("topbar--sticky");$('.logobar').css('marginTop',0)
	//$('.pagewrapper').css('paddingTop',0);
  }
});

$(".js_opennav").click(function(e){
	e.preventDefault();
	$(".js_navmenu").toggleClass("hideonsmall");
});

function shufflenav() {
	if ( $(window).width() > 620 ) {
		$('.sitenav--sec').appendTo($('.topbar'));
	} else {		
		$('.sitenav--sec').appendTo($('.sitenav--prim .menuitems'));
	}
}