$(function() {
		// create a variable and click handler to determine the type
		// of calculator that the user wants
		var calcDo = '';
		$('#calcDo').on('click', 'span', function (){
			calcDo = this.id
			$(this).css('backgroundColor', '#A6B1B9');
			$(this).css('borderRadius', '3px')
			chooseCalcType(calcDo);
		})

		//determine whether or not the user needs an extra keyboard options
		function chooseCalcType (calcDo) {
			if (calcDo === 'matrix') {
				$('#matrixButtons').css('visibility', 'visible');
				$('#basic').css('backgroundColor', 'transparent');
				$('#stats').css('backgroundColor', 'transparent');
				$('#prob').css('backgroundColor', 'transparent');
			} else if (calcDo === 'stats'){
				$('#matrixButtons').css('visibility', 'hidden');
				$('#basic').css('backgroundColor', 'transparent');
				$('#matrix').css('backgroundColor', 'transparent');
				$('#prob').css('backgroundColor', 'transparent'); 
			} else if (calcDo === 'prob'){
				$('#matrixButtons').css('visibility', 'hidden');
				$('#basic').css('backgroundColor', 'transparent');
				$('#matrix').css('backgroundColor', 'transparent');
				$('#stats').css('backgroundColor', 'transparent'); 
			} else {
				$('#matrixButtons').css('visibility', 'hidden');
				$('#prob').css('backgroundColor', 'transparent');
				$('#matrix').css('backgroundColor', 'transparent');
				$('#stats').css('backgroundColor', 'transparent'); 
			}
		}

		$('.buttons').on('click', 'span', function(){
			var matrixDo = $(this).attr('id')
			var lcd = $('#screen').html();
			var keyVal = $(this).html();

			if ( $(this).attr('id') === 'calc' ) {
				funcOrNot(lcd);
			} else if (calcDo === 'matrix'){
				matrixIt(lcd, matrixDo);
			} else if ( $(this).attr('id') === 'cancel' ){
				$('#screen').html(null);
				$('#plot').html(null);
			} else if ($(this).attr('id') === '=') {
				funcOrNot(lcd);
			} else if ($(this).attr('id') === 'deleteIt'){
				$('#screen').text(lcd.substring(0, lcd.length - 1))
			} else {
				//displays pushed buttons on screen
				$('#screen').text( lcd + keyVal );
			}
		});	

});
