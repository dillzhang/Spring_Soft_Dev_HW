var size = 538;

var canvas = document.getElementById("ftb2maga");
var ctx = canvas.getContext("2d");

//Background
var background = function background() {
    // Set the fill color
    ctx.fillStyle = "#303030"; //(String for color)
    // Fill the canvas
    // Draws a rectangle that fills the screen
    ctx.fillRect(0,0,size,size); //(Starting X, Starting Y, Delta X, Delta Y)
}

var counter = 0;

var face = function face() {
    // Set the stroke color
    ctx.strokeStyle = "#ff0000"; //(String for color)
    // Set the fill color
    ctx.fillStyle = "#ff0000";
    
    // Draws the border of a rectangle (Eyes)
    ctx.strokeRect(size/4 - 25, size/4, 50, 100);
    ctx.fillRect(size/4 - 25, size/4, 50, 10 * (10-counter));
    ctx.strokeRect(3*size/4 + 25, size/4, - 50, 100);
    ctx.fillRect(3*size/4 + 25, size/4, - 50, 10 * (10-counter));
    //Draws in pupils if pass state 7
    if (counter >= 7) {
	ctx.fillRect(size/4 + 15, size/4 + 90, -30, -60);
	ctx.fillRect(3*size/4 + 15, size/4 + 90, -30, -60);
    }
    
    // Draws the border of a rectangle (Mouth)
    ctx.strokeRect(size/2 - 150, 3*size/4 - 50, 300, 75);
    if (counter < 9) {
	// Moves to the initial position
	ctx.beginPath();
	ctx.moveTo(size/2 - 150, 3*size/4 - 50 + 75 * (counter % 2)); //(X coordinate, Y coordinate)
	// Creates a line to the next points
	for (var i = 0; i < 13; i++) {
	    ctx.lineTo(size/2 - 150 + i*25, 3*size/4 - 50 + (75 * ((i + counter) % 2))); //(Next X coordinate, Next Y coordinate)
	}
	// Draws in the lines
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
    } else {
	// Set the font size and family
	ctx.font="40px Times New Roman";
	// Display text at desired location
	ctx.fillText("Hello World!", 5*size/16, 3*size/4);
    }
	
    // Moves to initial position (Nose)
    ctx.moveTo(size/2, size/2-25);
    // Creates a line to the next points
    ctx.lineTo(size/2-25, size/2+25);
    ctx.lineTo(size/2+25, size/2+25);
    ctx.lineTo(size/2, size/2-25);
    // Draws in the lines
    ctx.stroke();
    if (counter >= 9) {
	ctx.fill();
    }

    // (Bolts on top)
    for (var i = 0; i < 10; i++) {
	// Starts a new path
	ctx.beginPath();
	// Traverse a circle (arc of 360)
	ctx.arc(size*i/10+size/20, size/16, 10, 0, Math.PI*2); //(Center X, Center Y, Radius, Starting Angle, Finishing Angle)
	// Draws said path
	ctx.stroke();
	// If the current bolt is within the range of progress, fill it in
	if (i <= counter) {
	    ctx.fill();
	}
    }
}

// Function to be looped
var looper = function looper() {
    background();
    face();
    counter = (counter + 1) % 10;
}

// Calling and looping of fucntions
looper();
interval = setInterval(looper, 500);
    
