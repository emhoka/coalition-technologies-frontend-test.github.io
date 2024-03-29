'use strict';

$(document).ready(function() {
	$('#tab-one, #tab-two').click(function() {
		$('#tab-one, #tab-two').toggleClass('active inactive');
		$('#tab-one-image, #tab-two-image').toggleClass('active-tab-image inactive-tab-image');
		$('#schedule-section').toggleClass('active-section inactive-section');
	});

	$('#accordion-button-one').click(function() {
		$('#accordion-button-one').toggleClass('collapsed');
		$('#flush-collapseOne').toggleClass('show');
	});
	$('#accordion-button-two').click(function() {
		$('#accordion-button-two').toggleClass('collapsed');
		$('#flush-collapseTwo').toggleClass('show');
	});
});
