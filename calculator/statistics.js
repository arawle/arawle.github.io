function statsIt (lcd, statsDo) {
	var toArr = lcd.split(' ');

	if (statsDo === 'mean') {
		console.log('hi')
		$('#screen').text(math.mean(math.eval(lcd)));
	} else if (statsDo === 'median') {
		$('#screen').text(math.median(math.eval(lcd)));
	} else if (statsDo === 'mode') {
		$('#screen').text(math.mode(math.eval(lcd)));
	} else {
		$('#screen').text(math.std(math.eval(lcd)));
	}
}

var statsVar = {
	mean: function (toArr) {
		return math.det(math.eval(toArr));
	},
	median: function (lcd) {
		return math.eval(lcd);
	},
	mode: function (toArr) {
		return math.crossProduct(math.eval(toArr));
	},
	std: function (toArr) {
		return math.trace(math.eval(toArr));
	}
}

// make the statsVar.whatever work

