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
var quitAllDemo = function(e) {
	console.log("Triggered")
	$(".resultLoaded").hide()
	$(".tweet0").off()
	$(".tweet1").off()
	$(".tweet2").off()
	$(".tweet0").show()
	$(".tweet1").show()
	$(".tweet1").show()
	$(".tweet0").removeClass('positionZero')
	$(".tweet1").removeClass('positionZero')
	$(".tweet2").removeClass('positionZero')
	$(".response").hide()
	$(".part").toggle();
	$(".resultLoaded").hide();
	// $(".tweet0").on('click', demotweet0)
	// $(".tweet1").on('click', demotweet1)
	$(".tweet2").on('click', demotweet2)
}

$(document).ready(function() {
	$(".tweet2").on("click", demotweet2);
	$("#quitDemo").on("click", quitAllDemo);
});