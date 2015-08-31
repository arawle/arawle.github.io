//Set of functions for key style changes when Basic/Matrix/Stats/Prob buttons are pushed.
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

    // function showPickedFunction () {
    //   $(this.id).css('backgroundColor', '#A6B1B9');
    //   $(this.id).css('borderRadius', '3px');
    // }