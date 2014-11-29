$(document).ready(function() {
	$('.trigger').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#popup_registration') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('#overlay').click( function(){
		$('#popup_registration')
			.animate({opacity: 0, top: '35%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});
});