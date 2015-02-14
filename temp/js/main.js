$(document).ready(function() {

	// MENU FUNCTIONALITY
	$('.menu-icon, .overlay').on('click', function(){
		$('#application').toggleClass('active-menu');
		$('.menu-icon').children('i').toggleClass('click-fadein');
		$('.menu-icon').children('i').toggleClass('click-fadeout');
	});

	// PROFILE TOGGLE
	$('.navigation-header-switch').on('click', function(){

		var 	switchHeight = $('#profileSwitch').height();
			switchHeight = switchHeight + 58;

		if($(this).hasClass('active')){

			var 	profileHeight = 52;
				i = 0;

			$(this).parent('#profileSwitch').children('.navigation-header-switch').each(function() {
				i++;
			});

			if(switchHeight < 59){
				$('#profileSwitch').height((profileHeight*i)-52);
			} else if(switchHeight > 58) {
				$('#profileSwitch').height(0);
			}

		} else {

			$(this).siblings('.navigation-header-switch').removeClass('active');
			$(this).addClass('active');
			$('#profileSwitch').height(58);

		}

	});



});