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
				matrixStyle();
			} else if (calcDo === 'stats'){
				statsStyle();
			} else if (calcDo === 'prob'){
				probStyle();
			} else {
				basicStyle();
			}
		}

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
				$('#screen').text(lcd.substring(0, lcd.length - 1))
			} else {
				//displays pushed buttons on screen
				$('#screen').text( lcd + keyVal );
			}
		});	

    function matrixStyle () {
      $('#matrixButtons').css('visibility', 'visible');
      $('#matBut').html('');
      $('#matBut').append('<span class="operator" id="determ">Determinant</span><span class="operator" id="dotProd">Dot Product</span><span class="operator" id="crossProd">Cross</span><span class="operator" id="trace">Trace</span>');
      $('#basic').css('backgroundColor', 'transparent');
      $('#stats').css('backgroundColor', 'transparent');
      $('#prob').css('backgroundColor', 'transparent');
    }

    function statsStyle () {
      $('#matrixButtons').css('visibility', 'visible');
      $('#matBut').html('');
      $('#matBut').append('<span class="operator" id="mean">Mean</span><span class="operator" id="median">Median</span><span class="operator" id="mode">Mode</span><span class="operator" id="std">StD</span>')
      $('#basic').css('backgroundColor', 'transparent');
      $('#matrix').css('backgroundColor', 'transparent');
      $('#prob').css('backgroundColor', 'transparent'); 
    }

    function probStyle () {
      $('#matrixButtons').css('visibility', 'visible');
      $('#matBut').html('');
      $('#matBut').append('<span class="operator" id="combos">Combos(n,k)</span><span class="operator" id="kld">KLD</span><span class="operator" id="funMN">Multinomial</span><span class="operator" id="perm">Permutations</span>')
      $('#basic').css('backgroundColor', 'transparent');
      $('#matrix').css('backgroundColor', 'transparent');
      $('#stats').css('backgroundColor', 'transparent'); 
    }

    function basicStyle () {
      $('#matrixButtons').css('visibility', 'visible');
      $('#matBut').html('');
      $('#prob').css('backgroundColor', 'transparent');
      $('#matrix').css('backgroundColor', 'transparent');
      $('#stats').css('backgroundColor', 'transparent'); 
    }
      

});
