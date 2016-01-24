$(function() {
	var userChoice = null;
	var compChoice = null;
	var lossCounter = 0;
	var winCounter = 0;

	$('.fit').on('click', function (e) {
		computerPicker();
		comparePicks(userChoice, compChoice);
	});

	var userPicker = $('div').on('click', function (e){
		if ($(this).hasClass('rock')) {
			userChoice = 'rock';
		} else if ($(this).hasClass('paper')) {
			userChoice = 'paper';
		} else {
			userChoice = 'scissors';
		};
		return userChoice;
	});

	function computerPicker () {
		var computerNumber = Math.random();
		if (computerNumber < 0.33){
			compChoice = 'rock';
		} else if (computerNumber < 0.66) {
			compChoice = 'paper';
		} else {
			compChoice = 'scissors';
		};
		return compChoice;
	};

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
			};
		} else if (userChoice == 'paper') {
			if (compChoice == 'scissors') {
				choiceDisplay('scissors win')
				lossCounter += 1;
				winLoss();
			} else {
				choiceDisplay('paper wins');
				winCounter += 1;
				winLoss();
			};
		} else {
			if (compChoice == 'rock') {
				choiceDisplay('rock wins');
				lossCounter += 1;
				winLoss();
			} else {
				choiceDisplay('scissors win');
				winCounter += 1;
				winLoss();
			};
		};
	};

	$('#counter').html('wins - ' + winCounter + '\n' + 'losses - ' + lossCounter);

	function winLoss () {
		$('#counter').html('wins - ' + winCounter + '\n' + 'losses - ' + lossCounter);
	};

	function choiceDisplay (winner) {
		$('.choiceDisplay').html('you chose ' + userChoice + ' // computer chose ' + compChoice + ' // ' + winner);
	};

	var button = $('button');
	button.on('click', function(){
	  $('#counter').html('wins - ' + 0 + ' ' + 'losses - ' + 0);
		$('.choiceDisplay').html('Click rock, paper, or scissors to begin');
	});
});
