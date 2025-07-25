const mytext =document.getElementById("mytext");
const tofarenheit =document.getElementById("tofarenheit");
const tocelsius =document.getElementById("tocelsius");
const result=document.getElementById("result");

let temp;
function convert(){
    if(tofarenheit.checked){
        temp=Number(mytext.value);
        temp=(temp*9/5)+32;
        result.textContent=temp.toFixed(1)+ "Farenheit";
        
    }

    else if(tocelsius.checked){
        temp=Number(mytext.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+ "Celsius";
    
    }

    else{
        result.textContent="Select a unit for Conversion";

    }

}