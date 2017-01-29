
function Start (){
    
    
var srtBtn= document.getElementById("startBtn");
srtBtn.disabled=true;
srtBtn.value="Processing!";

var pos = 0;
var pos2 = 0;
var box = document.getElementById('box');
var boxx = document.getElementById('boxx');
var speed= Math.random()*10;
var speed2= Math.random()*10;
var t = setInterval(move, speed);
var t2 = setInterval(move2, speed2);
var size = document.getElementById("container").clientWidth - document.getElementById("img").clientWidth;


/*
var h3 = document.getElementById("h3"),
h2byName = document.getElementsByTagName("h3"),
myBody = document.getElementsByTagName("body")[0];

var h32 = document.getElementById("h32"),
h32byName = document.getElementsByTagName("h3"),
my2Body = document.getElementsByTagName("body")[1];

h2byName[0].innerHTML =  "Speed : " + speed; 
h32byName[1].innerHTML =  "Speed : " + speed2;  */

function whoWin(){
if (speed < speed2)
{
       srtBtn.disabled=false;
    sweetAlert("1st runner won!"); 

   
}
else if (speed > speed2)
{
        srtBtn.disabled=false;
sweetAlert("2nd runner won!");
    
}
else 
{
    sweetAlert("Draw!"); 

}
}

function move(){
    
    if (pos >= size){
        
        clearInterval(t);
         whoWin();
    }
    else
    {
        pos +=1;
        box.style.left = pos+'px';
    
    }
}

function move2(){
    if (pos2 >= size){
        
        clearInterval(t2);
        whoWin();
    }
    else
    {
        pos2 +=1;
          boxx.style.left = pos2+'px';
    }
}
    
}


