var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var roboWidth=100;
var roboHeight=90;
var roboXpos=10;
var roboYpos=10;
var backgroundIMG="mars.jpg";
var roboIMG="rover.png";


function add(){
    var backgroundIMGtag=new Image();
    backgroundIMGtag.src=backgroundIMG;
    backgroundIMGtag.onload=uploadBG;

    var roboIMGtag=new Image();
    roboIMGtag.src=roboIMG;
    roboIMGtag.onload=uploadrobo;
}

function  uploadBG() {
    ctx.drawImage(backgroundIMGtag,0,0,800,600);
}

function  uploadrobo() {
    ctx.drawImage(roboIMGtag,roboXpos,roboYpos,100,90);
    
}

window.addEventListener("keydown",keydownF);


function keydownF(eventdetails){
    var clickedKeyCode= eventdetails.keyCode;
    console.log(clickedKeyCode);
    if (clickedKeyCode=="38"){
        up();
    }

    if (clickedKeyCode=="40"){
        down();
    }

    if(clickedKeyCode=="39"){
        right();
    }

    if (clickedKeyCode=="37"){
        left();
    }
}

function up(){
    if (roboYpos>0){
         roboYpos=roboYpos-10;
         console.log("up pressed, X:"+roboXpos+" Y:"+roboYpos);
         uploadBG();
         uploadrobo();
    }
}

function down(){
    if (roboYpos<600){
         roboYpos=roboYpos+10;
         console.log("Down pressed, X:"+roboXpos+" Y:"+roboYpos);
         uploadBG();
         uploadrobo();
    }
}

function left(){
    if (roboXpos>0){
         roboXpos=roboXpos-10;
         console.log("left pressed, X:"+roboXpos+" Y:"+roboYpos);
         uploadBG();
         uploadrobo();
    }
}

function right(){
    if (roboXpos<800){
         roboXpos=roboXpos+10;
         console.log("right pressed, X:"+roboXpos+" Y:"+roboYpos);
         uploadBG();
         uploadrobo();
    }
}