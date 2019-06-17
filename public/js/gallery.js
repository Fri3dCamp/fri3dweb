$(".gallery__image").click(function(e){
	e.preventDefault();
	var bgimg = $( e.target ).css("backgroundImage");
	var caption = $( e.target ).children( "figcaption" ).html();
	console.log( caption );
	$(".gallery__overlay").removeClass("gallery__overlay--hidden");
	$(".gallery__overlay figure" ).css( "backgroundImage", bgimg )
	$(".gallery__overlay figure figcaption" ).html( caption );
});

$(".gallery__overlay").click( function(e) {
	$(".gallery__overlay").addClass("gallery__overlay--hidden");
});