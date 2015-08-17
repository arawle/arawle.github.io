var section = document.querySelectorAll('section')[0];
var firstClass = null;
var firstId = null;
var pairCounter = 0;


var cardPairsOne = ['dog', 'cat', 'cow', 'chicken', 'horse', 'rabbit', 'bird', 'ostrich', 'dog', 'cat', 'cow', 'chicken', 'horse', 'rabbit', 'bird', 'ostrich'];
var shuffleCards = function (array) {
  for (var i = 0; i < array.length * 100; i++){
    var randomNum = Math.round(Math.random() * (array.length - 1));
    var insert = array[randomNum];
    array.splice(randomNum, 1);
    array.unshift(insert);
  }
  return array;
}
var shuffledCards = shuffleCards(cardPairsOne);

function cardCreator (cardId) {
	var newCard = document.createElement('div');

		newCard.setAttribute('class', shuffledCards[cardId]);
    newCard.setAttribute('id', cardId);

		newCard.addEventListener('click', function () {
      var eventId = this.getAttribute('id');
      if(firstClass === null){
        newCard.innerHTML = newCard.className;
        firstId = eventId
        return firstClass = this.className;
      }
      else if (firstClass === newCard.className && firstId !== eventId) {
        var firstElement = document.getElementById(firstId);
        var secondElement = document.getElementById(eventId);
        newCard.innerHTML = newCard.className;
        firstClass = null;
        firstId = null;
        pairCounter += 1;
          if (pairCounter === 8){
            alert('You win!!!')
          }
          else {
            alert(pairCounter)
          };
        firstElement.style.backgroundColor = 'inherit';
        firstElement.style.borderWidth = '2px';
        firstElement.style.borderColor = 'transparent';
        firstElement.style.color = 'transparent';
        secondElement.style.backgroundColor = 'inherit';
        secondElement.style.borderWidth = '2px';
        secondElement.style.borderColor = 'transparent';
        secondElement.style.color = 'transparent';

      } else {
        newCard.innerHTML = newCard.className;
        console.log('Try Again!');
        var firstElement = document.getElementById(firstId);
        var secondElement = document.getElementById(eventId);
          
          window.setTimeout(function(){
            firstElement.innerHTML = '';
            secondElement.innerHTML = '';
          }, 500);
          console.log(firstId.innerHTML)

          firstClass = null;
          firstId = null;
        }
			
		})
	section.appendChild(newCard);
}
	for(var j = 0; j < cardPairsOne.length; j++){
		cardCreator(j);
	}

//add reset button event handler
var button = document.querySelector('button');
button.addEventListener('click', function(){
  location.reload('div');
})

 window.setTimeout(function(){ 
   alert('Try Again!')
   location.reload(window)}, 300000);



