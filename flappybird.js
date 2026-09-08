
//variables for canvas board, change these if you want a difference
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//variables for the bird
let birdWidth = 34; // 34/24 is the ratio
let birdHeight = 24;
let birdXPosition: boardWidth / 8;
let birdYPosition: boardHeight / 2;

let Bird = {
	
}

//Sets the board dimensions to the one stated in the top
window.onload = function() {
	board = document.getElementById("board");
	board.height = boardHeight;
	board.width = boardWidth;
	context = board.getContext("2d"); //used to draw on the board
}