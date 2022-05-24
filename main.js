var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mousevent="empty"
var last_x,last_y
var color="red"
var width_of_line="3"


canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    console.log("mousedown")
    mousevent="mousedown";
   color=document.getElementById("color").value 
   width_of_line=document.getElementById("width").value
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    console.log("mouseup")
    mousevent="mouseup";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    console.log("mouseleave")
    mousevent="mouseleave";
}

canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e){
    Currentx=e.clientX-canvas.offsetLeft
    Currenty=e.clientY-canvas.offsetTop
  if( mousevent=="mousedown"){
      ctx.beginPath()   
      ctx.strokeStyle=color
      ctx.lineWidth=width_of_line
      ctx.moveTo(last_x,last_y)
      ctx.lineTo(Currentx,Currenty)
      ctx.stroke()
    }
    last_x=Currentx
    last_y=Currenty 
}


