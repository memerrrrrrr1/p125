leftwristx = 0
rightwristx = 0
difference = 0

function setup(){
    cp = createCapture(VIDEO)
    cp.position(45,170)
    can = createCanvas(500,500)
    can.position(850,170)

    myposes = ml5.poseNet(cp,modeloaded)

    myposes.on("pose",gotposes)
}

function modeloaded(){
    console.log("model is ready!")
}

function gotposes(results){

    if(results.length > 0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x
        rightwristx = results[0].pose.rightWrist.x
        difference = floor(leftwristx - rightwristx) 
    }

   
}

function draw(){
    background("#7979ba")
    document.getElementById("size_tag").innerHTML="The size of the text is: "+difference+" pixels.";
    textSize(difference)
    fill("#c327f2")
    text("This is a test.", 125,250)

}