$(document).ready( function () {

	$('#fbButton').hover( function() {
		$(this).attr( "src", "img/facebookhover.png" );
		}, function() {
			$(this).attr( "src", "img/facebook.png" );
		});

	$('#twButton').hover( function() {
		$(this).attr( "src", "img/twitterhover.png" );
	}, function() {
			$(this).attr( "src", "img/twitter.png" );
	});
		

	$('#lnButton').hover( function() {
		$(this).attr( "src", "img/linkedinhover.png" );
	}, function () {
		$(this).attr( "src", "img/linkedin.png" );
	});

});
