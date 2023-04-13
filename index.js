var num = Math.floor(Math.random()*6)+1;
var ran = "images/dice"+num+".png";
(document.querySelectorAll("img")[0]).setAttribute("src",ran);

var num1 = Math.floor(Math.random()*6)+1;
var ran1 = "images/dice"+num1+".png";
(document.querySelectorAll("img")[1]).setAttribute("src",ran1);

if(ran>ran1){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS"; 
}else if(ran<ran1){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS"; 
}else{
    document.querySelector("h1").innerHTML="DRAW"; 
}
