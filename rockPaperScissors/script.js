//variables I might need later
	// var rock = div.dataset.rock;
	// var paper = div.dataset.paper;
	// var scissors = div.dataset.scissors;
//div options - Rock, Paper, or Scissors
var divOptions = ['rock', 'paper', 'scissors'];
var options = document.querySelector('section.fit');
//create user choice and computer choice variable, start set to zero
var userChoice = null;
var compChoice = null;
var lossCounter = 0;
var winCounter = 0;
// Create divs
function optionCreator (optionId){
	var newOption = document.createElement('div');
	newOption.setAttribute('data', divOptions[optionId])
	newOption.setAttribute('class', divOptions[optionId])
	newOption.innerHTML = divOptions[optionId];
	newOption.addEventListener('click', function (e) {
			console.log(userPicker(e.target));
			console.log(computerPicker());
			comparePicks(userChoice, compChoice);
		});
	options.appendChild(newOption);
}
for(var j = 0; j < divOptions.length; j++){
	optionCreator(j);
}

// create user choice event handler function
function userPicker (div) {
	if (div.innerHTML == 'rock') {
		userChoice = 'rock';
	} else if (div.innerHTML == 'paper') {
		userChoice = 'paper';
	} else {
		userChoice = 'scissors';
	} 
	return userChoice;
}

// function for computer to choose rock, paper or scissors
function computerPicker () {
	var computerNumber = Math.random();
	if (computerNumber < 0.33){
		compChoice = 'rock';
	} else if (computerNumber < 0.66) {
		compChoice = 'paper';
	} else {
		compChoice = 'scissors';
	} return compChoice;
};

// if rock = rock, paper = paper, or scissors = scissors, = tie
function comparePicks (userChoice, compChoice) {
	if (userChoice == compChoice) {
		choiceDisplay('The result is a tie');
	} else if (userChoice == 'rock') {
		if (compChoice == 'paper') {
			choiceDisplay('paper wins');
			lossCounter += 1;
			winLoss();
		} else {
			choiceDisplay('rock wins');
			winCounter += 1;
			winLoss();
		}
	} else if (userChoice == 'paper') {
		if (compChoice == 'scissors') {
			choiceDisplay('scissors win')
			lossCounter += 1;
			winLoss();
		} else {
			choiceDisplay('paper wins');
			winCounter += 1;
			winLoss();
		}
	} else {
		if (compChoice == 'rock') {
			choiceDisplay('rock wins');
			lossCounter += 1;
			winLoss();
		} else {
			choiceDisplay('scissors win');
			winCounter += 1;
			winLoss();
		}
	} 
};

// create win/loss counter
var counter = document.createElement('div');
var section = document.querySelector('section.counter');
counter.innerHTML = 'wins - ' + winCounter + '\n' + 'losses - ' + lossCounter;
section.appendChild(counter);

//function for appending win/loss counter
function winLoss () {
	counter.innerHTML = 'wins - ' + winCounter + '\n' + 'losses - ' + lossCounter;
	section.appendChild(counter);
}

//choice display function (section.choice)
var choice = document.querySelector('section.choiceDisplay')
function choiceDisplay (winner) {
	choice.innerHTML = 'you chose ' + userChoice + ' // computer chose ' + compChoice + ' // ' + winner;
	section.appendChild(choice);
}


// create reset button for wins/losses and choice display
var button = document.querySelector('button');
button.addEventListener('click', function(){
  counter.innerHTML = 'wins - ' + 0 + ' ' + 'losses - ' + 0;
	section.appendChild(counter);
	choice.innerHTML = 'Click rock, paper, or scissors to begin';
	section.appendChild(choice);

})

