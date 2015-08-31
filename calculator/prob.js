function probIt (lcd, probDo) {
	var toArr = lcd.split(' ');

	if (probDo === 'combos') {
		console.log('hi')
		$('#screen').text(math.combinations(math.eval(toArr)));
	} else if (probDo === 'kld') {
		var halfOne = toArr[0]
		var halfTwo = toArr[1]
		$('#screen').text((math.kldivergence(math.eval(halfOne), math.eval(halfTwo)))._data);
	} else if (probDo === 'funMN') {
		$('#screen').text(math.mode(math.eval(lcd)));
	} else {
		$('#screen').text(math.std(math.eval(lcd)));
	}
}

//This object doesn't currently work
// var probVar = {
// 	combos: function (toArr) {
// 		return math.det(math.eval(toArr));
// 	},
// 	kld: function (lcd) {
// 		return math.eval(lcd);
// 	},
// 	funMN: function (toArr) {
// 		return math.crossProduct(math.eval(toArr));
// 	},
// 	perm: function (toArr) {
// 		return math.trace(math.eval(toArr));
// 	}
// }
