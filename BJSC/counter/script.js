const decbtn=document.getElementById("decbtn");
const incbtn=document.getElementById("incbtn");
const resetbtn=document.getElementById("resetbtn");
const clabel=document.getElementById("clabel");
let count=0;

incbtn.onclick=function(){
    count++;
    clabel.textContent=count;
} 

decbtn.onclick=function(){
    count--;
    clabel.textContent=count;
}

reset.onclick=function(){
    count=0;
    clabel.textContent=count;
}