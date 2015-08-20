$(function() {

	//create user choice and computer choice variable, start set to zero
	var userChoice = null;
	var compChoice = null;
	var lossCounter = 0;
	var winCounter = 0;

	//create event listeners for rock, paper, and scissors
	$('.fit').on('click', function (e) {
		computerPicker();
		comparePicks(userChoice, compChoice);
	});

	// create user choice event handler function
	var userPicker = $('div').on('click', function (e){
											if ($(this).hasClass('rock')) {
												userChoice = 'rock';
											} else if ($(this).hasClass('paper')) {
												userChoice = 'paper';
											} else {
												userChoice = 'scissors';
											} 
											return userChoice;
										})

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
	$('#counter').html('wins - ' + winCounter + '\n' + 'losses - ' + lossCounter);

	//function for appending win/loss counter
	function winLoss () {
		$('#counter').html('wins - ' + winCounter + '\n' + 'losses - ' + lossCounter);
		// section.appendChild(counter);
	}

	//choice display function (section.choice)
	function choiceDisplay (winner) {
		$('.choiceDisplay').html('you chose ' + userChoice + ' // computer chose ' + compChoice + ' // ' + winner);
	}

	// create reset button for wins/losses and choice display
	var button = $('button');
	button.on('click', function(){
	  $('#counter').html('wins - ' + 0 + ' ' + 'losses - ' + 0);
		$('.choiceDisplay').html('Click rock, paper, or scissors to begin');

	})

});
