function matrixIt (lcd, matrixDo) {
	var toArr = lcd.split(' ');

	//determine which method to use
	if (matrixDo === 'determ') {
		$('#screen').text(matrixVar[determinant(toArr)]);
	} else if (matrixDo === 'dotProd') {
		$('#screen').text(math.eval(lcd));
	} else if (matrixDo === 'crossProd') {
		var halfOne = toArr[0]
		var halfTwo = toArr[1]
		$('#screen').text('['+(math.cross(math.eval(halfOne), math.eval(halfTwo)))._data + ']');
	} else {
		$('#screen').text(math.trace(math.eval(toArr)));
	}
}


//This object doesn't currently work
// var matrixVar = {
// 		determinant: function (toArr) {
// 			return math.det(math.eval(toArr));
// 		},
// 		dotProduct: function (lcd) {
// 			return math.eval(lcd);
// 		},
// 		crossProduct: function (toArr) {
// 			return math.crossProduct(math.eval(toArr));
// 		},
// 		trace: function (toArr) {
// 			return math.trace(math.eval(toArr));
// 		}
// }

