img="";
status="";
objects =[];

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
        objects =results;
    }
}
function draw()
{
    image(img, 0, 0, 640, 420);
//Manually to draw the rectangle

   // fill("#FF0000");
    //text("Dog", 45, 75);
    //noFill();
    //stroke("#FF0000");
    //rect(30, 60, 450, 350);

    //fill("#FF0000");
    //text("cat", 320, 120);
    //noFill();
    //stroke("#FF0000");
    //rect(300, 90, 270, 320)

    //Drawing the rectangle with the help of cocossd 

    if(status != "")
    {
        for(i= 0; i< objects.length; i++)
        {
            document.getElementById("status").innerHTML= "Status : Object Detected";
         fill("#FF0000");
         percent= floor(objects[i].confidence*100);
         text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y)
         noFill();
         stroke("#FF0000");
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
