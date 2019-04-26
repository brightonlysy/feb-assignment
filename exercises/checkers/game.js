function table(superficie)
{
    for (var i = 0; i < 4; i++)
    {
    superficie.beginPath();
    superficie.rect(0 + i * 80,0,40,40);
    superficie.fill();
    superficie.closePath();
    }

    for (var i = 0; i < 3; i++)
    {
    superficie.beginPath();
    superficie.rect(40 + i * 80,40,40,40);
    superficie.fill();
    superficie.closePath();
    }

    for (var i = 0; i < 4; i++)
    {
    superficie.beginPath();
    superficie.rect(0 + i * 80,80,40,40);
    superficie.fill();
    superficie.closePath();
    }

    for (var i = 0; i < 3; i++)
    {
    superficie.beginPath();
    superficie.rect(40 + i * 80,120,40,40);
    superficie.fill();
    superficie.closePath();
    }

    for (var i = 0; i < 4; i++)
    {
    superficie.beginPath();
    superficie.rect(0 + i * 80,160,40,40);
    superficie.fill();
    superficie.closePath();
    }

    for (var i = 0; i < 3; i++)
    {
    superficie.beginPath();
    superficie.rect(40 + i * 80,200,40,40);
    superficie.fill();
    superficie.closePath();
    }

    for (var i = 0; i < 4; i++)
    {
    superficie.beginPath();
    superficie.rect(0 + i * 80,240,40,40);
    superficie.fill();
    superficie.closePath();
    }
}

function drawCircle(superficie, celdax, celday)
{
    superficie.beginPath();
    superficie.strokeStyle="#ff0000";
    superficie.lineWidth = 10;
    superficie.arc(20 + 40 * celdax, 20 + 40 * celday, 13, 0, 2 * Math.PI);
    superficie.stroke();
    superficie.closePath();
}

var canvas = document.getElementById('myCanvas');
var superficie = canvas.getContext("2d");

table(superficie);

for (var i = 0; i < 4; i++)
{
    drawCircle(superficie, 0 + i * 2, 0);
}

for (var i = 0; i < 3; i++)
{
    drawCircle(superficie, 1 + i * 2, 1);
}

for (var i = 0; i < 4; i++)
{
    drawCircle(superficie, 0 + i * 2, 2);
}

canvas.addEventListener("mousedown", position, false);

table = [1, -100, 1, -100, 1, -100, 1,
        -100, 1, -100, 1, -100, 1, -100,
        1, -100, 1, -100, 1, -100, 1,
        -100, 1, -100, 1, -100, 1, -100]
var selected = false;
var celdayselected =-100;
var celdaxselected = -100;
function position(event){
    var x = event.x;
    var y = event.y;
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    var xtransform = Math.floor(x/40);
    var ytransform = Math.floor(y/40);
    console.log("x:" + xtransform + " y:" + ytransform);
    if (!selected&&table[xtransform + 7 * ytransform] == 1)
    {
        superficie.beginPath();
        superficie.fillStyle = "#FFFF00";
        superficie.rect(0 + xtransform * 40, ytransform * 40, 40, 40);
        superficie.fill();
        superficie.closePath();
        drawCircle(superficie, xtransform, ytransform);
        selected = true;
        celdayselected = ytransform;
        celdaxselected = xtransform;
    }
    if (selected&&table[xtransform + 7 * ytransform] == 0)
    {
        drawCircle(superficie, xtransform, ytransform);
        superficie.beginPath();
        superficie.fillStyle = "#000000";
        superficie.rect(0 + celdaxselected*40, celdayselected*40, 40, 40);
        superficie.fill();
        superficie.closePath();
        table[xtransform + 7 * ytransform] * 1;
        table[celdaxselected + 7 * celdayselected] * 0;
        selected = false;
        celdayselected =-100;
        celdaxselected = -100;
        table[xtransform + 7 * ytransform] * 1;
    }
}




