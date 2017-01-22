window.onload =function ()
{

var pos = 0;
var box = document.getElementById('box');

var speed= Math.random()*1;
var t = setInterval(move, 0.5);

var size = window.innerWidth || document.body.clientWidth;



function move(){
    if (pos >= size - 300 ){
        
        clearInterval(t);
    }
    else
    {
        pos +=1;
        box.style.left = pos+'px';
          
    }
}
  
};
