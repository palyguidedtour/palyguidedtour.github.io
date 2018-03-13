$(document).ready(function() {
	let boxes = $('.box');
	let sects = $('.sect');

	for (let i = 0; i < boxes.length; i++) {
		boxes.eq(i).on("click", function() {
			sects.addClass("hidden");
			sects.eq(i).removeClass("hidden");
		})
	}

})