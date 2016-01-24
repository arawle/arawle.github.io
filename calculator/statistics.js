function statsIt (lcd, statsDo) {
	if (statsDo === 'mean') {
		$('#screen').text(statsVar['mean'](lcd));
	} else if (statsDo === 'median') {
		$('#screen').text(statsVar['median'](lcd));
	} else if (statsDo === 'mode') {
		$('#screen').text(statsVar['mode'](lcd));
	} else {
		$('#screen').text(statsVar['std'](lcd));
	}
}
var statsVar = {
	mean: function (lcd) {
		return math.mean(math.eval(lcd));
	},
	median: function (lcd) {
		return math.median(math.eval(lcd))
	},
	mode: function (lcd) {
		return math.mode(math.eval(lcd))
	},
	std: function (toArr) {
		return math.std(math.eval(lcd));
	}
}

