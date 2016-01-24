function matrixIt (lcd, matrixDo) {
  var toArr = lcd.split(' ');

  if (matrixDo === 'determ') {
    $('#screen').text(matrixVar['determinant'](toArr));
  } else if (matrixDo === 'dotProd') {
    $('#screen').text(matrixVar['dotProduct'](lcd));
  } else if (matrixDo === 'crossProd') {
    $('#screen').text('['+ matrixVar['crossProd'](toArr) + ']');
  } else {
    $('#screen').text(matrixVar['trace'](toArr));
  }
}
//This object doesn't currently work
var matrixVar = {
  determinant: function (toArr) {
    return math.det(math.eval(toArr));
  },
  dotProduct: function (lcd) {
    return math.eval(lcd);
  },
  crossProduct: function (toArr) {
    var halfOne = toArr[0];
    var halfTwo = toArr[1];
    return (math.cross(math.eval(halfOne), math.eval(halfTwo)))._data;
  },
  trace: function (toArr) {
    return math.trace(math.eval(toArr));
  }
};
