

$('document').ready(function() {
    var videoInput = document.getElementById('inputVideo');
  var canvasInput = document.getElementById('inputCanvas');

  var htracker = new headtrackr.Tracker();
  htracker.init(videoInput, canvasInput);
  htracker.start();

  function generateRandomWay() {
      var direction = ['Left', 'Right', 'Up', 'Down'];
      randomNum = Math.floor(Math.random() * direction.length);
      $('#direction').text(direction[randomNum]);
  }
    setInterval(generateRandomWay, 3000);

    document.addEventListener('facetrackingEvent',
        function(e) {
            // first lets do right and left
            if(e.x <= 150) {
                //stage right and stage left rules
                margin =
                $('#foo').text('You went Right!');
                $('#glasses').css('margin-left', (e.x + 50));

            } else if (e.x > 150) {
                $('#foo').text('You went Left!');
                $('#glasses').css('margin-right', '800px');
            } else {
                console.log('Error');
            }
            // next lets do up and down
            if(e.y <= 130) {
                $('#bar').text('You went up!');
                $('#glasses').css('margin-top', '0px');
            } else if (e.y > 130) {
                $('#bar').text('You went down!');
                $('#glasses').css('margin-top', '800px');
            } else {
                console.log('Error');
            }

        })

});























