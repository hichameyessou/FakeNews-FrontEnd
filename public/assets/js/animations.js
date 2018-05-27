$(document).ready(function() {
	$(".tweet2").click(function() {
		$(".tweet0").hide()
		$(".tweet1").hide()
		$(".tweet2").animate({ top: '0px', left: '0px' });
		$(".response").toggleClass('show')
	});
	$(".tweet1").click(function() {
		$(".tweet0").hide()
		$(".tweet2").hide()
		$(".tweet1").animate({ top: '0px', left: '0px' });
		$(".response").toggleClass('show')
	});
	$(".tweet0").click(function() {
		$(".tweet1").hide()
		$(".tweet2").hide()
		$(".tweet0").animate({ top: '0px', left: '0px' });
		$(".response").toggleClass('show')
	});
});