//Dillon Zhang
//SoftDev2 pd03
//HW03 -- Circle
//2016-02-22

var size = 538;
var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

//Clear
var clear = function clear() {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#000000";
    ctx.clearRect(0,0,size,size);
    ctx.strokeRect(0,0,size,size);
}

//Circle
var circle = function circle(radius) {
    ctx.fillStyle = "#ff0000";
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.arc(size/2, size/2, radius, 0, 2*Math.PI)
    ctx.fill();
}

//Animate Circle
var radius = 1;
var delta = 1;
var requestID;
var animation = function animation() {
    radius = radius + delta;
    if (Math.abs(size/4 - radius) > size/4) {
	delta = 0 - delta;
	radius = radius + delta;
    }
    clear();
    circle(radius);
    requestID = window.requestAnimationFrame(animation);
}

//Stop
var stop = function stop() {
    console.log("Stop it")
    window.cancelAnimationFrame(requestID);
}

document.getElementById("start").addEventListener("click", animation);
document.getElementById("stop").addEventListener("click", stop);
//Draws the border of the canvas for initialization
clear();
