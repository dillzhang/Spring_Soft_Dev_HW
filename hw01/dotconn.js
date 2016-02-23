//Dillon Zhang
//SoftDev2 pd03
//HW2B -- Dot, Dot, Dot
//2016-02-11

var size = 538;
var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

var xcor = -1;
var ycor = -1;

//Clear
var clear = function clear() {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    //Clears the internals of the canvas
    ctx.clearRect(0,0,size,size);
    //Border of the Canvas
    ctx.strokeRect(0,0,size,size);
    xcor = -1;
    ycor = -1;
}

//Connect Zee Dot
var dot = function dot() {
    var rect = canvas.getBoundingClientRect();
    var xcur = event.clientX - rect.left;
    var ycur = event.clientY - rect.top;
    circle(xcur, ycur); //Both the tail and the head of the lines will show above the circle
    // Uncommenting the other two circle calls, will cover the heads and tails of the lines
    // Although redundant, for ease of use, please leave the above circle call alone
    if (xcor >= 0 || ycor >= 0) {
	//Drawing the line from the old coordinate to the new coordinate
	ctx.beginPath();
	ctx.moveTo(xcor, ycor);
	ctx.lineTo(xcur, ycur);
	ctx.strokeStyle = "#000000";
	ctx.stroke();
	//circle(xcor, ycor); //The head of the last line will show above the last circle
    }
    //circle(xcur, ycur); //The tails of the lines will show above the circle
    xcor = xcur;
    ycor = ycur;
}

//Draw Zee Dot
function circle(xcor, ycor) {
    ctx.fillStyle = "#ff0000";
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.arc(xcor, ycor, 10, 0, 2*Math.PI)
    ctx.fill();
}

canvas.addEventListener("click", dot);
document.getElementById("clear").addEventListener("click", clear);
//Draws the border of the canvas for initialization
clear();
