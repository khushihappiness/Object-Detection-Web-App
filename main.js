img="";
status="";
function preload()
{
    img=loadImage('dog_cat.jpg');
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();

    objectDetector= ml5.objectDetector('cocossd' ,modelLoaded);//objectDetector is used to initiallize the cocossd model
    document.getElementById("status").innerHTML= 'status: detecting object'

}

function modelLoaded()
{
    console.log("Model is Loaded");
    status= true;
    objectDetector.detect(img, gotResult);//detect is a function used for object detection and gets back th result
}


function gotResult(error, results)
{
    if(error)
    {
console.error(error);
    }
    else
    {
        console.log(results);
    }
}
function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("cat", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320)
}
