let currentNumber=0;

function currentColor(){
    const elementColour = document.getElementById("number");
    if(currentNumber>0){
        elementColour.style.color="rgb(12, 222, 12)"
    }else if(currentNumber<0){
        elementColour.style.color="red"
    }else{
        elementColour.style.color="black"
    }
}

document.getElementById("decrease").onclick = function(){
    document.getElementById("number").textContent=currentNumber-=1;
    currentColor()
}

document.getElementById("reset").onclick = function(){
    document.getElementById("number").textContent=currentNumber=0;
    currentColor()
}

document.getElementById("increase").onclick = function(){
    document.getElementById("number").textContent=currentNumber+=1;
    currentColor()
}


