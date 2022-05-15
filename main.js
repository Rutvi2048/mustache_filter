var mx,my;
function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    img = createCapture(VIDEO);
    img.hide();
    img.size(400,400);
    poseNet = ml5.poseNet(img,modelLoaded);
    poseNet.on('pose',gotResult);
}

function draw()
{
    image(img,0,0,400,400);
    image(mustach,mx-45,my-10,100,60);
}

function take_snapshot()
{
    save('MyFilterImage.png');
}

function gotResult(result)
{
    if(result.length > 0)
    {
    console.log(result);
    mx= result[0].pose.nose.x;
    my = result[0].pose.nose.y;
    }
}

function modelLoaded()
{
    console.log("model Loaded");
}

function preload()
{
    mustach = loadImage('https://i.postimg.cc/RZbNzb8b/istockphoto-934194258-170667a-removebg-preview-1.png');
}    