let x;
document.getElementById("btn").onclick=function(){
    x=Math.floor(Math.random()*100)+1;
    document.getElementById("xlabel").innerHTML=x;
}