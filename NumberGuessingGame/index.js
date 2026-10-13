let limit=5;
let userInput;
let gameOverlost=false;
let gameOverWon=false
let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkInput(number){
    if(number>randomNumber){
        limit-=1;
        document.getElementById("output").textContent=`${userInput} is too high, try again. ${limit} chances left`; 
    }else if(number<randomNumber){
        limit-=1;
        document.getElementById("output").textContent=`${userInput} is too low, try again. ${limit} chances left`;
    }else if(number===randomNumber){
        document.getElementById("output").textContent=`EXACTLY! You guessed right 🥳🥳!`;
        gameOverWon=true;
        return;
    }if(limit===0){
        gameOverlost=true;
        document.getElementById("output").textContent=`Sorry, you're out of chances😣, the number was ${randomNumber}`;
    }
}


document.getElementById("button").onclick=function(){
    if(gameOverlost){
        document.getElementById("output").textContent=`Game Over! click restart to play again.`
        return;
       }else if(gameOverWon){
        document.getElementById("output").textContent=`Already Won, click restart to play again😎`;
        return
    }
    const rawInput = document.getElementById("input-box").value.trim();
    userInput = Number(rawInput);

    if(rawInput===""){
        document.getElementById("output").textContent=`Please enter a number`;
        return;
    }
    if(isNaN(userInput)){
        document.getElementById("output").textContent=`Input must be a number`;
        return;
    }
    if(userInput<1 || userInput>100){
        document.getElementById("output").textContent=`Number must be between 1 and 100.`;
        return;
    }

    checkInput(userInput)
    document.getElementById("input-box").value = "";
}

document.getElementById("restart").onclick = function(){
    document.getElementById("output").textContent=`Game restarted, new number generated`;
    document.getElementById("input-box").value="";
    limit=7;
    gameOverlost=false;
    gameOverWon=false
    randomNumber = Math.floor(Math.random() * 100) + 1;
}


