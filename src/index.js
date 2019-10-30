//  Selecting the canvas DOM node
let canvas = document.getElementById("example");

// Creating the context using canvas method `.getContext()`
let ctx = canvas.getContext("2d");

// fillRect(x, y, width, height)    //Draws a filled rectangle.
// strokeRect(x, y, width, height)  //Draws a rectangular outline.
// clearRect(x, y, width, height)  //Clears the specified rect. area, making it fully transparent.

// PURPLE RECTANGLE
// set the fill style for the fillRect
ctx.fillStyle = "purple";

// draw the rectangle
ctx.fillRect(25, 25, 100, 100);

// CLEAR RECTANGLE
// draw clear rectangle on top of the purple one
ctx.clearRect(45, 45, 60, 60);

// BLUE STROKE RECTANGLE
// set the color and line width for the stroke rectangle
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;

// draw the stroke rectangle
ctx.strokeRect(150, 50, 50, 50);

// PATHS
/* Steps to draw a Canvas path:

  - Begin path
  - Use drawing commands to draw the path
  - Close the path
  - Use `.stroke()` or `.fill()` to render the path

*/

ctx.beginPath();

ctx.strokeStyle = "orange";
ctx.lineWidth = 10;

ctx.moveTo(50, 150);

ctx.lineTo(250, 150);

ctx.stroke();
ctx.closePath();

// TRIANGLE
// start the path
ctx.beginPath();

// change the fill style
ctx.fillStyle = "magenta";

// starting position is x=150, y=200
ctx.moveTo(150, 200);

// draw the line that has final coordinates x=100, y=250
ctx.lineTo(100, 250);

// draw the line that has final coordinates x=200, y=250
ctx.lineTo(200, 250);

// fills the shape and closes the path automatically
ctx.fill();

// close the path
ctx.closePath();

// DRAWING ARCS OR CIRCLES - arc()   and   arcTo()

/*
	arc(x, y, radius, startAngle, endAngle, anticlockwise)


  - Draws an arc which is centered at (x, y) position with radius starting 
  at startAngle and ending at endAngle going  in the given direction indicated 
  by anticlockwise (default is clockwise).


  ---------------------------------------------------------------------


	arcTo(x1, y1, x2, y2, radius)

   - Draws an arc with the given control points and radius,
   connected to the previous point by a straight line.
*/

/*
CONVERTING DEGREES TO RADIANS:

Angles in the arc function are measured in radians, not degrees.
To convert degrees to radians use the following JavaScript expression:

radians = (Math.PI / 180) * degrees.

*/

// CIRCLE - stroke

ctx.beginPath();

ctx.lineWidth = 20;
ctx.strokeStyle = "green";

// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(300, 300, 75, 0, (Math.PI / 180) * 180); //  Math.PI * 2 - Full circle    Math.PI * 1 -  Half circle

// ctx.arc(300, 300, 75, 0, (Math.PI / 180) * degrees); // Converting radians to degrees

ctx.stroke();

ctx.closePath();

var myCircle = {
  fillStyle: "red",
  arcData: [300, 300, 35, 0, Math.PI * 2]
};

// CIRCLE - fill

ctx.beginPath();

ctx.fillStyle = "red";

ctx.arc(...myCircle.arcData); //  Math.PI * 2 - Full circle    Math.PI * 1 -  Half circle

ctx.fill();

ctx.closePath();

// ARC - arcTo()
ctx.strokeStyle = "rgba(255, 0, 0, 0.5)";
ctx.lineWidth = 4;

ctx.beginPath();

ctx.moveTo(20, 20); // Create a starting point
ctx.lineTo(80, 20); // Create a horizontal line

ctx.arcTo(140, 20, 140, 70, 50); // Create an arc
ctx.lineTo(140, 120); // Continue with vertical line

ctx.stroke(); // Draw it

// CREATING CONTEXT FOR CANVAS ELEMENT
let lineCanvas = document.getElementById("line-style-canvas");
let lCtx = lineCanvas.getContext("2d");

lCtx.beginPath();

lCtx.lineWidth = 5;
lCtx.lineCap = "round";
lCtx.moveTo(40, 50);
lCtx.lineTo(200, 50);

lCtx.stroke();

lCtx.closePath();

// CREATING CONTEXT FOR CANVAS ELEMENT
let patternCanvas = document.getElementById("pattern-canvas");
let pCtx = patternCanvas.getContext("2d");

const image = new Image();
image.src =
  "https://img.stockfresh.com/files/r/robuart/x/29/8049774_52896881.jpg";

image.onload = function() {
  const pattern = pCtx.createPattern(image, "repeat");

  pCtx.fillStyle = pattern;
  pCtx.fillRect(0, 0, 300, 300);
};

// DRAWING TEXT

let fontCanvas = document.getElementById("font-canvas");
let fCtx = fontCanvas.getContext("2d");

fCtx.font = "50px monospace";
fCtx.fillText("Ironhackers", 10, 50);

fCtx.font = "36px monospace";
fCtx.strokeText("Ironhackers", 10, 50);

// https://codepen.io/Denzelzeldi/pen/ROKYWq?editors=1010

// DRAWING IMAGES

// Create an Image and add the source
let img2 = new Image(); // Create new <img> element
img2.src = "https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg"; // Set source path

// Render the image on the canvas
fCtx.drawImage(img2, 100, 100, 150, 100);

// https://codepen.io/Denzelzeldi/pen/rbjqVr?editors=1010
