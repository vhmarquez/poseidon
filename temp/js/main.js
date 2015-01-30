$(document).ready(function() {

	$('.menu-icon, .overlay').on('click', function(){
		$('#application').toggleClass('active-menu');
		$('.menu-icon').children('i').toggleClass('click-fadein');
		$('.menu-icon').children('i').toggleClass('click-fadeout');
	});

	$('.navigation-header-switch').on('click', function(){

		var 	switchHeight = $('#profileSwitch').height();
			switchHeight = switchHeight + 61;

			console.log(switchHeight);

		if($(this).hasClass('active')){
			var 	profileHeight = 61;
				i = 0;

			$(this).parent('#profileSwitch').children('.navigation-header-switch').each(function() {
				i++;
			});

			console.log(switchHeight);

			if(switchHeight < 62){
				$('#profileSwitch').height((profileHeight*i) - 61);
			} else if(switchHeight > 61) {
				$('#profileSwitch').css('height', '61px');
			}

		} else {

			$(this).siblings('.navigation-header-switch').removeClass('active');
			$(this).addClass('active');
			$('#profileSwitch').css('height', '61px');

		}

	});



});