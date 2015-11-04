console.log("Hello World");

var board = document.querySelector('table');
var resetButton = document.getElementById('clear-board');
var nextTurn = document.createElement('p');
var header = document.querySelector('h1');
header.appendChild(nextTurn);



var square1 = document.getElementById('sq-one');
var square2 = document.getElementById('sq-two');
var square3 = document.getElementById('sq-three');

var square4 = document.getElementById('sq-four');
var square5 = document.getElementById('sq-five');
var square6 = document.getElementById('sq-six');

var square7 = document.getElementById('sq-seven');
var square8 = document.getElementById('sq-eight');
var square9 = document.getElementById('sq-nine');


var gameCounter = 0;


var chooseSquare = function(){
	var square = event.target;
		if (gameCounter === 0) {
			square.classList.add('x');
			nextTurn.textContent = 'It is now O\'s turn:';
			gameCounter++;
			square.removeEventListener('click', chooseSquare);
	} else if (gameCounter % 2 === 0) {
			square.classList.add('x');
			nextTurn.textContent = 'It is now O\'s turn:';
			gameCounter++;
			square.removeEventListener('click', chooseSquare);
	} else if (gameCounter % 2 !== 0) {
			square.classList.add('o');
			nextTurn.textContent = 'It is now X\'s turn:'
			gameCounter++;
			square.removeEventListener('click', chooseSquare);
	} else
	determineWinner();
};

var resetBoard = function(){
	location.reload(true);
};

square1.addEventListener('click', chooseSquare);
square2.addEventListener('click', chooseSquare);
square3.addEventListener('click', chooseSquare);

square4.addEventListener('click', chooseSquare);
square5.addEventListener('click', chooseSquare);
square6.addEventListener('click', chooseSquare);

square7.addEventListener('click', chooseSquare);
square8.addEventListener('click', chooseSquare);
square9.addEventListener('click', chooseSquare);

resetButton.addEventListener('click', resetBoard);



var determineWinner = function() {
	if (square1.classList.contains('x') && 
		square2.classList.contains('x') && 
		square3.classList.contains('x')) {
			window.alert('WINNER IS X!!');
	} else if (square4.classList.contains('x') && 
		square5.classList.contains('x') && 
		square6.classList.contains('x')) {
			window.alert('WINNER IS X!!');
	} else if (square7.classList.contains('x') && 
		square8.classList.contains('x') && 
		square9.classList.contains('x')) {
			window.alert('WINNER IS X!!');
	} else if (square1.classList.contains('x') && 
		square2.classList.contains('x') && 
		square3.classList.contains('x')) {
			window.alert('WINNER IS X!!');
	} else if (square1.classList.contains('x') && 
		square5.classList.contains('x') && 
		square9.classList.contains('x')) {
			window.alert('WINNER IS X!!');
	} else if (square3.classList.contains('x') && 
		square5.classList.contains('x') && 
		square7.classList.contains('x')) {
			window.alert('WINNER IS X!!');
	} else if (square1.classList.contains('x') && 
		square4.classList.contains('x') && 
		square7.classList.contains('x')) {
			window.alert('WINNER IS X!!');
	} else if (square2.classList.contains('x') && 
		square5.classList.contains('x') && 
		square8.classList.contains('x')) {
			window.alert('WINNER IS X!!');
	} else if (square3.classList.contains('x') && 
		square6.classList.contains('x') && 
		square9.classList.contains('x')) {
			window.alert('WINNER IS X!!');
	} else if (square1.classList.contains('o') && 
		square2.classList.contains('o') && 
		square3.classList.contains('o')) {
			window.alert('WINNER IS O!!');
	} else if (square4.classList.contains('o') && 
		square5.classList.contains('o') && 
		square6.classList.contains('o')) {
			window.alert('WINNER IS O!!');
	} else if (square7.classList.contains('o') && 
		square8.classList.contains('o') && 
		square9.classList.contains('o')) {
			window.alert('WINNER IS O!!');
	} else if (square1.classList.contains('o') && 
		square5.classList.contains('o') && 
		square9.classList.contains('o')) {
			window.alert('WINNER IS O!!');
	} else if (square3.classList.contains('o') && 
		square5.classList.contains('o') && 
		square7.classList.contains('o')) {
			window.alert('WINNER IS O!!');
	} else if (square1.classList.contains('o') && 
		square4.classList.contains('o') && 
		square7.classList.contains('o')) {
			window.alert('WINNER IS O!!');
	} else if (square2.classList.contains('o') && 
		square5.classList.contains('o') && 
		square8.classList.contains('o')) {
			window.alert('WINNER IS O!!');
	} else if (square3.classList.contains('o') && 
		square6.classList.contains('o') && 
		square9.classList.contains('o')) {
			window.alert('WINNER IS O!!');
	} else if (gameCounter === 9) {
			window.alert('THERE IS NO WINNER. ONLY LOSERS!');
	}
};


