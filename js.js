window.onload =function ()
{
   
    
var pos = 0;
var pos2 = 0;
var box = document.getElementById('box');
var boxx = document.getElementById('boxx');
var speed= Math.random()*20;
var speed2= Math.random()*20;
var t = setInterval(move, speed);
var t2 = setInterval(move2, speed2);
var size = window.innerWidth || document.body.clientWidth;


var h3 = document.getElementById("h3"),
h2byName = document.getElementsByTagName("h3"),
myBody = document.getElementsByTagName("body")[0];
h2byName[0].innerHTML =  "eee"; 

function whoWin(){
if (speed < speed2)
{
    alert("Cat win!"); 
}
else
{
alert("Dog win!"); 
}
};




function move(){
    if (pos >= size-300 ){
        
        clearInterval(t);
    }
    else
    {
        pos +=1;
        box.style.left = pos+'px';
    
    }
}


function move2(){
    if (pos2 >= size-300 ){
        
        clearInterval(t2);
        whoWin();
    }
    else
    {
        pos2 +=1;
          boxx.style.left = pos2+'px';
    }
}





};

