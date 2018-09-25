var ip;
var ipnum= new Array(7);
function preload(){
	ip= loadStrings('used_ip_addresses.txt');
}

function setup(){

	var canvas = createCanvas(windowWidth,windowHeight);
	canvas.parent('processingZone');
	loop();

}

function draw(){
	noStroke();
	background(255,96,96);
	textAlign(CENTER,TOP);
	textSize(50);
	rotate(PI/15);
	fill(255);
	translate(100,200);
	if (frameCount%45==0) {
		for (var i = 0; i < 7; i++) {
			ipnum[i]=floor(random(47));
		}
	}

	text(ip[ipnum[0]],0,0,windowWidth/2,150);
	fill(255,255,255,200);
	text(ip[ipnum[1]],0,150,windowWidth/2,150);
	fill(255,255,255,150);
	text(ip[ipnum[2]],0,300,windowWidth/2,150);
	fill(255,255,255,100);
	text(ip[ipnum[3]],0,450,windowWidth/2,150);
	fill(255,255,255,50);
	text(ip[ipnum[4]],0,600,windowWidth/2,150);
	fill(255,255,255,200);
	text(ip[ipnum[5]],0,-150,windowWidth/2,150);
	fill(255,255,255,150);
	text(ip[ipnum[6]],0,-300,windowWidth/2,150);
	fill(255,255,255,100);
	text(ip[ipnum[7]],0,-450,windowWidth/2,150);

	text(ip[ipnum[0]],windowWidth/2,0,windowWidth/2,150);
	fill(255,255,255,200);
	text(ip[ipnum[1]],windowWidth/2,150,windowWidth/2,150);
	fill(255,255,255,150);
	text(ip[ipnum[2]],windowWidth/2,300,windowWidth/2,150);
	fill(255,255,255,100);
	text(ip[ipnum[3]],windowWidth/2,450,windowWidth/2,150);
	fill(255,255,255,50);
	text(ip[ipnum[4]],windowWidth/2,600,windowWidth/2,150);
	fill(255,255,255,200);
	text(ip[ipnum[5]],windowWidth/2,-150,windowWidth/2,150);
	fill(255,255,255,150);
	text(ip[ipnum[6]],windowWidth/2,-300,windowWidth/2,150);
	fill(255,255,255,100);
	text(ip[ipnum[7]],windowWidth/2,-450,windowWidth/2,150);

}