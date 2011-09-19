jQuery(document).ready(function() {
	// wait until DOM is ready
	
	var startHeight = 30;
	
	$(".more").live( 'click', function() {
		console.log("clicked on more");
		var pHeight = $(this).parents('p').height();
		var pPadding = $(this).parents('p').css('padding-bottom');
		var finalHeight = parseInt(pHeight) + parseInt(pPadding);

		$(this).parents('div:first').animate({height: finalHeight}, 1000);

		$(this).removeClass("more").addClass("less");
	});

	
	$(".less").live( 'click', function() {
		console.log("clicked on less");
		$(this).parents('div:first').animate({height: startHeight}, 1000);

		$(this).removeClass("less").addClass("more");
	});

})
