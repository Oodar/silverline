// wait for DOM to be ready:
$(document).ready( function () {

	// transify crap
 	// this needs to be moved
 	$('.panel p').transify();
	$('#testing').transify({
		opacityOrig: .3
	});

	var $scroll = $('#slider .scroll');
	var $panels = $('#slider .scrollContainer > div');
	var $container = $('#slider .scrollContainer');

	// fix panel layout:
	var horizontal = true;

	if( horizontal ) {
		
		$panels.css({
			'float' : 'left',
			'position' : 'relative'
		});

	}

	// calculate new width for the container
	$container.css('width', $panels[0].offsetWidth * $panels.length );

	function selectNav() {
		
		$(this)
			.parents('ul:first') // first <ul> parent
				.find('a') // find hyperlink elements
					.removeClass('selected') // unselect all of them
				.end() // go back to all hyperlinks
			.end()// go back to $this
			.addClass('selected');

	}

	// bind navigation clicks to selectNav function:
	$(' .navigation').find('a').click(selectNav);

	function trigger( data ) {

		// within navigation, find the hyperlink whose href ends with ID of data
		var element = $(' .navigation').find('a[href$="' + data.id +'"]').get(0);

		selectNav.call( element );

	}

	if( window.location.hash )
	{
		trigger({ id : window.location.hash.substr(1)});
	}
	
	var scrollOptions;

	if( $('#servicesNav').length > 0 )
	{
		scrollOptions = {
		
			target: $scroll,
			items: $panels,
			navigation: '.navigation a',
			onAfter: trigger,
			axis: 'xy',
			duration: 500,
			force: true,

		};
		//console.log("services nav found");

	}
	else
	{
		scrollOptions = {
		
			target: $scroll,
			items: $panels,
			navigation: '.navigation a',
			onAfter: trigger,
			axis: 'xy',
			duration: 500,
			force: true,
			interval: 7000
		};

		//console.log("services nav not found");

	}
	
	/*
	var scrollOptions = {
		
		target: $scroll,
		items: $panels,
		navigation: '.navigation a',
		onAfter: trigger,
		axis: 'xy',
		duration: 500,
		force: true,
		interval: 5000
	};
	*/

	// apply serialScroll
	$('#slider').serialScroll( scrollOptions );


	// apply loadScroll
	$.localScroll( scrollOptions );

	// move slider in to position
	scrollOptions.duration = 1;
	$.localScroll.hash( scrollOptions );

});
