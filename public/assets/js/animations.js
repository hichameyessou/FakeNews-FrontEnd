$(document).ready(function() {
	$(".tweet2").click(function() {
		$(".tweet0").hide()
		$(".tweet1").hide()
		$(".tweet2").animate({ top: '0px', left: '0px' });
		$(".response").toggleClass('show');
		setTimeout(function() {
			$(".part").toggleClass('hide');
		}, 2000);
	});
});