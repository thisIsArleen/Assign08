// var topPosition = 200;
// var leftPosition = -200;

var leftPosition=0;
var topPosition=50;
var scrwidth = screen.availWidth;
function runPuppy() {
                    
    var puppy = document.getElementById("puppy");
    puppy.style.visibility = "visible";
    puppy.style.position="relative";
    puppy.style.top="400px";
    puppy.style.left=leftPosition + "px";
    puppy.style.top=topPosition +"px";
    leftPosition=leftPosition+20;
    topPosition=topPosition+4;
    if(leftPosition>scrwidth)
    {
       leftPosition=0;
       topPosition=50;
    }
  
    
// add if it reaches the screen end (you can check with screen.availwidth)					
}
