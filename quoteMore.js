jQuery(document).ready(function() {
	// wait until DOM is ready
	
	var startHeight = 30;
	
	$(".more").live( 'click', function() {

		var pHeight = $(this).parents('div:first').children('.quote-content').children('p').height();
		var pPadBot = $(this).parents('div:first').children('.quote-content').children('p').css('padding-bottom');
		var pPadTop = $(this).parents('div:first').children('.quote-content').children('p').css('padding-top');

		var pPadding = parseInt(pPadBot) + parseInt(pPadTop);


		var finalHeight = parseInt(pHeight) + parseInt(pPadding);

		$(this).parents('div:first').animate({height: finalHeight}, 1000);
		$(this).parents('div:first').children('.quote-content').animate({height: finalHeight}, 1000);

		$(this).removeClass("more").addClass("less");

	});

	
	$(".less").live( 'click', function() {

		$(this).parents('div:first').animate({height: startHeight}, 1000);
		$(this).parents('div:first').children('.quote-content').animate({height: startHeight}, 1000);

		$(this).removeClass("less").addClass("more");
	});

})
