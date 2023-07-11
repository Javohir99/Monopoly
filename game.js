let body = document.body;
let startX;
let startY;
let mouse;
let X = 0;
let Y = 0;
let zoom = 1;
let rotate = '';
let scale = ''
body.onmousedown = function cordinate(event){
    startX = event.clientX;
    startY = event.clientY;
    mouse = true;
}
body.onmousemove = function move(event){
    if(mouse){
        X = (event.clientX - startX)/100 + X;
        Y = (startY-event.clientY)/100 + Y;
        board.style.transform = scale+"rotateY("+ (X) +"deg) rotateX("+ (Y) +"deg)";
        rotate = "rotateY("+ ((event.clientX - startX)/10) +"deg) rotateX("+ ((startY-event.clientY)/10) +"deg)";
    }
}
body.onmouseup=function(){
    mouse = false;
}
body.onwheel  = function(event){

    if(event.deltaY<0){
        board.style.transform = 'scale(' + (zoom+=0.1)+')' + rotate;
    }
    else{
        if(zoom>0){
            board.style.transform = 'scale(' + (zoom-=0.1)+')' + rotate;
        }
    }
    scale = 'scale(' + (zoom)+')';
} 
function start(){
    board.style.animation = "none";
    choose.remove();
}