var currentColor = 'blue';

var container = document.querySelector('div');
container.style.width = '1000px';
container.style.height = '760px';

document.querySelector('div').appendChild(document.createElement('br'));

function canvas (color){
	var newDiv = document.createElement('div');
	newDiv.style.backgroundColor = color;
	newDiv.style.width = '19px';
	newDiv.style.height = '19px';
	newDiv.style.float = 'left';
	newDiv.style.borderStyle = 'solid';
	newDiv.style.borderColor = '#c8c8c8';
	newDiv.style.borderWidth = "1px";

	newDiv.addEventListener('click', function() {
		newDiv.style.backgroundColor = currentColor;
		newDiv.style.borderColor = currentColor;
	});
	newDiv.addEventListener('dblclick', function() {
		newDiv.style.backgroundColor = 'white';
		newDiv.style.borderColor = '#c8c8c8';
	});
	var list = document.querySelectorAll('div')[0];
	list.appendChild(newDiv);
}

for(var i = 0; i < 1598; i++){
	canvas('white');
}

var button = document.createElement('button');
button.innerHTML = 'click to reset';
button.addEventListener('click', function(){
	location.reload('div');
});
document.querySelector('body').appendChild(button);

var checkerButton = document.createElement('button');
checkerButton.innerHTML = 'Click for a pattern!';
checkerButton.style.float = 'left';
checkerButton.addEventListener('click', function(){
	var test = document.querySelectorAll('div:nth-of-type(even):not(.colorsToChooseFrom)');
	for (var i = 0; i < test.length; i++) {
	  test[i].style.backgroundColor === 'white' ? color = '#c8c8c8' : color = 'white';
	  test[i].style.backgroundColor = color;
	}
});

var list = document.querySelector('body');
list.appendChild(checkerButton);

function setCurrentColor (newColor) {
	currentColor = newColor;
}

var test = document.querySelector('.color');
test.addEventListener('click', function(){
	var x = this;
	document.querySelector('body').addEventListener('click', function(){
		setCurrentColor(x.style.backgroundColor);
		console.log(currentColor);
	});
});























