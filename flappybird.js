
//variables for canvas board, change these if you want a difference
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//variables for the bird
let birdWidth = 34; // 34/24 is the ratio
let birdHeight = 24;
let birdXPosition = boardWidth / 8;
let birdYPosition = boardHeight / 2;
let birdImg;

let Bird = {
	x : birdXPosition,
	y : birdYPosition,
	width: birdWidth,
	height: birdHeight,	
}

//variables for pipes
let pipeArray = [];
let pipeWidth = 64; // keep this ratio
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;


let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2; //pipespeed to the left

//Sets the board dimensions to the one stated in the top
window.onload = function() {
	board = document.getElementById("board");
	board.height = boardHeight;
	board.width = boardWidth;
	context = board.getContext("2d"); //used to draw on the board

	//draw flappy bird
	//context.fillStyle = "green";
	//context.fillRect(birdXPosition, birdYPosition, birdWidth, birdHeight);

	//load images
	birdImg = new Image();
	birdImg.src = "./flappybird.png";
	birdImg.onload = function() {
		context.drawImage(birdImg, Bird.x, Bird.y, Bird.width, Bird.height);
	}

	topPipeImg = new Image();
	topPipeImg.src = "./toppipe.png";

	bottomPipeImg = new Image();
	bottomPipeImg.src = "./bottompipe.png";

	requestAnimationFrame(update);
	setInterval(placePipes, 1500);
}

function update() {
	requestAnimationFrame(update);
	context.clearRect(0,0, board.width, board.height);

	//bird
	context.drawImage(birdImg, Bird.x, Bird.y, Bird.width, Bird.height);

	//pipes
	for (let i = 0; i < pipeArray.length; i++) {
		let pipe = pipeArray[i];
		pipe.x += velocityX;
		context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
	}
}

function placePipes() {

	let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
	let openingSpace = board.height /4;

	let topPipe = {
		img : topPipeImg,
		x : pipeX,
		y : randomPipeY,
		width : pipeWidth,
		height : pipeHeight,
		passed : false
	}

	pipeArray.push(topPipe);

	let bottomPipe = {
		img : bottomPipeImg,
		x : pipeX,
		y : randomPipeY + pipeHeight + openingSpace,
		width: pipeWidth,
		height: pipeHeight,
		passed: false
	}

	pipeArray.push(bottomPipe)
}