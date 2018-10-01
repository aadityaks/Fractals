function setup() {
  createCanvas(400, 400);
	
	noLoop();
}

function draw() {
  background(220);
	
	stroke(0);
	strokeWeight(5);
	translate(0,height/2);
	
	kochCurve(width,5);
}

//define how lage(length) and how many recursions(depth) you want
function kochCurve(length, depth){
	if(depth==0){
		line(0,0,length,0);
	}else{
		push();
		kochCurve(length/3,depth-1);
		translate(length/3,0);
		rotate(radians(-60));
		kochCurve(length/3,depth-1);
		translate(length/3,0);
		rotate(radians(120));
		kochCurve(length/3,depth-1);
		translate(length/3,0);
		rotate(radians(-60));
		kochCurve(length/3,depth-1);
		pop();
	}
} 
