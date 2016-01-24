$(function() {
	var calcDo = '';
	$('#calcDo').on('click', 'span', function (){
		calcDo = this.id
		$(this).css('backgroundColor', '#A6B1B9');
		$(this).css('borderRadius', '3px');
		chooseCalcType(calcDo);
	});
	function chooseCalcType (calcDo) {
		if (calcDo === 'matrix') {
			matrixStyle();
		} else if (calcDo === 'stats'){
			statsStyle();
		} else if (calcDo === 'prob'){
			probStyle();
		} else {
			basicStyle();
		}
	};
	$('.buttons').on('click', 'span', function(){
		var thisDo = $(this).attr('id')
		var lcd = $('#screen').html();
		var keyVal = $(this).html();

		if ( $(this).attr('id') === 'calc' ) {
			funcOrNot(lcd);
		} else if (calcDo === 'matrix'){
			matrixIt(lcd, thisDo);
		} else if (calcDo === 'stats') {
			statsIt(lcd, thisDo);
		} else if (calcDo === 'prob') {
			probIt(lcd, thisDo);
		} else if ( $(this).attr('id') === 'cancel' ){
			$('#screen').html(null);
			$('#plot').html(null);
		} else if ($(this).attr('id') === '=') {
			funcOrNot(lcd);
		} else if ($(this).attr('id') === 'deleteIt'){
			$('#screen').text(lcd.substring(0, lcd.length - 1));
		} else {
			$('#screen').text( lcd + keyVal );
		}
	});
});
