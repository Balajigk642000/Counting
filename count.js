let count=0;
document.getElementById("decrease").onclick=function(){
    count-=1;
    document.getElementById("countlable").innerHTML=count;
}
document.getElementById("Reset").onclick=function(){
    count=0;
    document.getElementById("countlable").innerHTML=count;
}
document.getElementById("Increase").onclick=function(){
    count+=1;
    document.getElementById("countlable").innerHTML=count;
}
