function setup() {
    video=createCapture(VIDEO)
    video.size(500,500)
    canvas=createCanvas(500,500)
    canvas.position(500,100)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded() {
    console.log("model is loaded ");
}

function gotPoses(result) {
    if(result.length > 0){
        console.log(result);
    }
}

function draw() {
    background("red")
}