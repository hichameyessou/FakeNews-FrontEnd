var demotweet2 = function(e) {
	$(".resultLoaded").hide();
	$(".tweet2").off();
	$(".tweet0").toggle()
	$(".tweet1").toggle()
	$(".tweet2").toggleClass('positionZero');
	$(".response").toggle();
	if ($(".response").is(":visible")) {
		setTimeout(function() {
			$(".part").toggle();
			$(".resultLoaded").toggle();
			$(".tweet2").on('click', demotweet2);
		}, 3000);
	} else {
		$(".part").toggle();
		$(".resultLoaded").toggle();
		$(".tweet2").on('click', demotweet2);

	}
}
$(document).ready(function() {
	$(".tweet2").on("click", demotweet2);
});