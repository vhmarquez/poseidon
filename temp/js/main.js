$(document).ready(function() {
	$('.menu-icon').on('click', function(){
		$('#application').toggleClass('active-menu');
		$(this).children('i').toggleClass('click-fadein');
		$(this).children('i').toggleClass('click-fadeout');
	});
});