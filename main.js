difference = 0;
leftwristX = 0;
rightristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 150);
    canvas = createCanvas(550, 550);
    canvas.position(800, 170);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
    }
}

function modelLoaded() {
    console.log('PoseNet is initialized!');
}

function draw() {
    background('#969a97');
    fill("#00ffff");
    text("Arnav Sharma", 0, 275);
    textSize(difference);
    document.getElementById("name_size").innerHTML = "Size of name = " + difference + "px";
}