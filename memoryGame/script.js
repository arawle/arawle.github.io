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

// tells cardClickHandler what to do if there is a match between cards
function handleMatch (firstId, eventId, card){
  var firstElement = document.getElementById(firstId);
  var secondElement = document.getElementById(eventId);
  card.innerHTML = card.className;
  firstClass = null;
  firstId = null;
  pairCounter += 1;
  if (pairCounter === 8){
    alert('You win!!!')
  }
  else {
    alert(pairCounter)
  };

  setMatched(firstElement);
  setMatched(secondElement);
}

// tells handleMatch what css to change if there is a match between cards
function setMatched (element) {
  element.style.backgroundColor = 'inherit';
  element.style.borderWidth = '2px';
  element.style.borderColor = 'transparent';
  element.style.color = 'transparent';
}

// tells cardClickHandler what to do if there isn't a match between cards
function handleNoMatch (firstId, eventId, card){
  card.innerHTML = card.className;
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

// Adds a handler for card matching (nothing yet selected, match, no match)
function cardClickHandler () {
  var eventId = this.getAttribute('id');
  if(firstClass === null){
    this.innerHTML = this.className;
    firstId = eventId
    return firstClass = this.className;
  }
  else if (firstClass === this.className && firstId !== eventId) {
    handleMatch (firstId, eventId, this);

  } else {
    handleNoMatch (firstId, eventId, this);
  } 
}

// Create new cards
function cardCreator (cardId) {
	var newCard = document.createElement('div');
	newCard.setAttribute('class', shuffledCards[cardId]);
  newCard.setAttribute('id', cardId);
	newCard.addEventListener('click', cardClickHandler)
	section.appendChild(newCard);
}
for(var j = 0; j < cardPairsOne.length; j++){
	cardCreator(j);
}

// add New Game button event handler
var button = document.querySelector('button');
button.addEventListener('click', function(){
  location.reload('div');
})

// Starts new game if player isn't successful in 3 min
window.setTimeout(function(){ 
 alert('Try Again!')
 location.reload(window)
}, 180000);



