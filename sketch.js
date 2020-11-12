function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES)
}

function draw() {
	let hr = hour();
	let mn = minute();
	let sc = second();

	background(51)
	
	translate(width/2, height/2)	

	textSize(128)
	text(hr, -250, -250);
	text(":", -100, -250);
	text(mn, -50, -250);
	text(":", 100, -250);
	text(sc, 150, -250);

	rotate(-90)



	strokeWeight(8)
	noFill()

	// seconds
	stroke(0, 128, 255)
	let secAngle = map(sc, 0, 60, 0, 360)
	arc(0, 0, 260, 260, 0, secAngle)
	push()
	strokeWeight(1)
	rotate(secAngle)
	line(0,0,110,0)
	pop()



	// minuts
	stroke(0, 255, 128)
	let minuteAngle = map(mn, 0, 60, 0, 360)
	arc(0, 0, 280, 280, 0, minuteAngle)
	push()
	strokeWeight(4)
	rotate(minuteAngle)
	line(0,0,100,0)
	pop()
	

	// hours
	stroke(255, 200, 0)
	let hourAngle = map(hr % 12, 0, 12, 0, 360)
	arc(0, 0, 300, 300, 0, hourAngle)
	push()
	rotate(hourAngle)
	strokeWeight(4)
	line(0,0,80,0)
	pop()






}