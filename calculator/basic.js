function funcOrNot (func) {
  var fx = '\u0192';

  if (func[0] === fx) {
    useFunction(func);
    $('#screen').text('\u0192' + equals(func.substring(1)));
  } else {
    var newOutput = equals(func);
    $('#screen').text(math.eval(newOutput));
  }
}
function equals (lcdVal) {
  var newLcd = '';
  var divide = '\u00F7';
  var pi = '\u03A0';
  var degrees = '\u00B0';
  var equalNotTotal = '\u003D';

  for (var i = 0; i < lcdVal.length; i++){
    if (lcdVal[i] === divide){
      newLcd = newLcd + '/';
    } else if (lcdVal[i] === pi) {
      newLcd = newLcd + 'pi';
    }else if (lcdVal[i] === degrees) {
      newLcd = newLcd + '(deg)';
    } else {
      newLcd = newLcd + lcdVal[i];
    }
  }
  return (newLcd);
}
function useFunction (lcdVal) {
  var noF = lcdVal.substring(5);
  var funcDraw = equals(noF);

  draw(funcDraw);
}
function draw (funcDraw) {
  try {
    functionPlot({
    target: '#plot',
    yDomain: [-5, 5],
    xDomain: [0, 5],
    data: [{ fn: math.eval('f(x) =' + funcDraw) }]
    });
  }
  catch (err) {
    console.log(err);
    alert(err);
  }
}