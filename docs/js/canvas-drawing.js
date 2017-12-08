/*jslint devel: true */

var strokeColor = '#55a8fc';

var canvasElements=document.getElementById("myCanvas");
myCanvas.width = 2278;
myCanvas.height = 1200;

// window.myCanvas=canvasElements[0];

window.ctx=myCanvas.getContext("2d");


window.drawGrid = function () {
	
    var dx = 150;
    var dy = 150;
    
    var x = 0;
    var y = 0;
    var w = myCanvas.width;
    var h = myCanvas.height;
    
    
    var xy = 10;
    
    ctx.lineWidth = 5;
    ctx.strokeStyle = strokeColor;
    while (y < h) {
      y = y + dy;
      ctx.moveTo(x, y);
      ctx.lineTo(w, y);
      ctx.stroke();
      
      ctx.font = "1px Calibri";  
      ctx.fillText(xy, x, y);  
      xy += 10;  
    }
    
    y =0;  
    xy =10; 
    while (x < w) {
      x = x + dx;
      ctx.moveTo(x, y);  
      ctx.lineTo(x,h);  
      ctx.stroke();   
      ctx.font = "1px Calibri";  
      ctx.fillText(xy,x,10);    
      xy+=10;  
    }
  }

window.showNumbers = function() {

}

window.renderCrosshairs = function(x, y) {
	var w = myCanvas.width;
    var h = myCanvas.height;

    var centerX = w/2;
    var centerY = h/2;

    finalX = (w/100) * x;
    finalY = (h/100) * y;

    // draw at midway point
	// remove aliasing
	diffX = finalX - centerX;
	diffY = finalY - centerY;

	if(diffX < 0) {
		diffX *= -1;
	}

	if(diffY < 0) {
		diffY *= -1;
	}

	if(centerX < finalX){
		midX = finalX - (diffX/2)
	}
	else {
		midX = centerX - (diffX/2)
	}

	if(centerY < finalY){
		midY = finalY - (diffY/2)
	}
	else {
		midY = centerY - (diffY/2)
	}

	// draw at final point
	// remove aliasing
	finalX = Math.floor(finalX) + 0.5;
	finalY = Math.floor(finalY) + 0.5;

	// remove aliasing
	centerX = Math.floor(centerX) + 0.5;
	centerY = Math.floor(centerY) + 0.5;

	drawCrosshair(centerX, centerY, 'rgba(85,168,252,0.5)');
	// setTimeout("viewer.forceRedraw()", 250);
	setTimeout("drawCrosshair(midX, midY, 'rgba(85,168,252,0.5)')", 500);
	// setTimeout("viewer.forceRedraw()", 750);
	setTimeout("drawCrosshair(finalX, finalY, 'rgba(85,168,252,0.5)')", 1000);
	setTimeout("ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)", 1500);

}


window.drawCrosshair = function(x, y, style) {

	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
 	ctx.beginPath();

	ctx.lineWidth = 5;
	ctx.strokeStyle = style;

	ctx.moveTo(x, y - 1000);
	ctx.lineTo(x, y + 1000);

	ctx.moveTo(x - 1000,  y);
	ctx.lineTo(x + 1000,  y);

	// Line color
	//ctx.strokeStyle = 'rgba(85,168,252,0.6)';
	ctx.stroke();

}

window.showCrosshairs = function (x, y) {

	var w = myCanvas.width;
    var h = myCanvas.height;

    var centerX = w/2;
    var centerY = h/2;

    finalX = (w/100) * x;
    finalY = (h/100) * y;

    // draw in middle
    // draw at midway point
    // draw at end point x, y

    // draw in the center

    // remove aliasing
	centerX = Math.floor(centerX) + 0.5;
	centerY = Math.floor(centerY) + 0.5;
	ctx.lineWidth = 5;

	ctx.moveTo(centerX, centerY - 500);
	ctx.lineTo(centerX, centerY + 500);

	ctx.moveTo(centerX - 500,  centerY);
	ctx.lineTo(centerX + 500,  centerY);

	// Line color
	// ctx.strokeStyle = strokeColor;
	ctx.strokeStyle = 'rgba(85,168,252,0.5)';


	ctx.stroke();


	// draw at midway point
	// remove aliasing
	diffX = finalX - centerX;
	diffY = finalY - centerY;

	if(diffX < 0) {
		diffX *= -1;
	}

	if(diffY < 0) {
		diffY *= -1;
	}

	if(centerX < finalX){
		midX = finalX - (diffX/2)
	}
	else {
		midX = centerX - (diffX/2)
	}

	if(centerY < finalY){
		midY = finalY - (diffY/2)
	}
	else {
		midY = centerY - (diffY/2)
	}


	ctx.moveTo(midX, midY - 500);
	ctx.lineTo(midX, midY + 500);

	ctx.moveTo(midX - 500,  midY);
	ctx.lineTo(midX + 500,  midY);

	// Line color
	//ctx.strokeStyle = 'rgba(85,168,252,0.6)';
	ctx.stroke();


	// draw at final point
	// remove aliasing
	finalX = Math.floor(finalX) + 0.5;
	finalY = Math.floor(finalY) + 0.5;

	ctx.moveTo(finalX, finalY - 500);
	ctx.lineTo(finalX, finalY + 500);

	ctx.moveTo(finalX - 500,  finalY);
	ctx.lineTo(finalX + 500,  finalY);

	// Line color
	//ctx.strokeStyle = 'rgba(85,168,252,1.0)';
	ctx.stroke();

}

function drawSquare(x, y, width, height, color) {

}

function renderCrosshairs (x, y){

}

function blueFlash () {

}

function playBleep() {

}

function playChuck () {

}


// 1. drawGrid
// 2. numbers
// 3. croshairs to x y
// 4. boxes to xy

