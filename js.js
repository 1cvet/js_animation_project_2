window.onload =function ()
{

var pos = 0;
var box = document.getElementById('box');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var speed= Math.random()*50;
var t = setInterval(move, speed);


function move(){
    if (pos >= 150){
        
        clearInterval(t);
      
      
    }
    else
    {
        pos +=1;
        box.style.left = pos+'px';
                box1.style.left = pos+'px';
                        box2.style.left = pos+'px';
                                box3.style.left = pos+'px';
    }
}
  
};
