$(document).ready(function() {
	$(".tweet2").click(function() {
		$(".resultLoaded").hide();

		$(".tweet0").toggle()
		$(".tweet1").toggle()
		$(".tweet2").toggleClass('positionZero');
		$(".response").toggle();

		setTimeout(function() {
			$(".part").toggle();
			$(".resultLoaded").toggle();

		}, 2000);



	});
});