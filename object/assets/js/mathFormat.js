$(document).ready(function () {
	console.log("Ready!");

	var startingHeight = 0.0;
	var scaleMult = 1.6;
	var diff = 0.0;
	
	$('.postMathFormula').each(function(index, elem) {
		startingHeight = $(elem).outerHeight();
		$(elem).addClass('scaleFormula');
		diff = (startingHeight * scaleMult) - startingHeight;
		$(elem).css('padding', (diff / 2) + 'px 0');
	});

	$('.postSchematicImage').each(function(index, elem) {
		startingHeight = $(elem).outerHeight();
		$(elem).addClass('scaleFormula');
		diff = (startingHeight * scaleMult) - startingHeight;
		$(elem).css('padding', (diff / 2) + 'px 0');
	});
});