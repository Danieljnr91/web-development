const toKelvin = document.getElementById("toKelvin");
const tofaren = document.getElementById("tofaren");
const farentokelvin = document.getElementById("farentokelvin");
const inputBox = document.getElementById("input-box");

const kelvin = document.getElementById("kelvin");
const faren = document.getElementById("faren");
const fartokev = document.getElementById("fartokev");

let inputValue,rawInput;
let reverseButtonPressed = 0;

function updatePlaceHolder(){
    if(reverseButtonPressed % 2 != 0){
        if(toKelvin.checked){
            inputBox.placeholder = "K to °C";
        }else if(tofaren.checked){
            inputBox.placeholder = "°F to °C";
        }else if(farentokelvin.checked){
            inputBox.placeholder = "K to °F";
        }
    }else{
        if(toKelvin.checked){
            inputBox.placeholder = "°C to K";
        }else if(tofaren.checked){
            inputBox.placeholder = "°C to °F";
        }else if(farentokelvin.checked){
            inputBox.placeholder = "°F to K";
        }
    }
}

toKelvin.onchange = updatePlaceHolder;
tofaren.onchange = updatePlaceHolder;
farentokelvin.onchange = updatePlaceHolder;


function doConversion(tempValue){
    if(reverseButtonPressed % 2 != 0){
        if(toKelvin.checked){
            let ans = tempValue-273.15;
            document.getElementById("header3").innerHTML = `${ans}°C <br> Approx. ${ans.toFixed(2)}°C`;
        }else if(tofaren.checked){
            let ans = (tempValue - 32) * (5/9);
            if(Number.isInteger(ans)){
                document.getElementById("header3").textContent = `${ans}°C`;
            }else{
                document.getElementById("header3").innerHTML = `${ans}°C <br> Approx. ${ans.toFixed(2)}°C`;
            }
        }else if(farentokelvin.checked){
            let ans = (tempValue-273.15) * (9/5) + 32;
            if(Number.isInteger(ans)){
                document.getElementById("header3").innerHTML = `${ans}°F`;
            }else{
                document.getElementById("header3").innerHTML = `${ans}°F <br> Approx. ${ans.toFixed(2)}°F`
            }
        }
    }else{
        if(toKelvin.checked){
            let ans = tempValue+273.15;
            document.getElementById("header3").innerHTML = `${ans}K <br> Approx. ${ans.toFixed(2)}K`;
        }else if(tofaren.checked){
            let ans = (tempValue * (9/5))+32;
            if(Number.isInteger(ans)){
                document.getElementById("header3").textContent = `${ans}°F`;
            }else{
                document.getElementById("header3").innerHTML = `${ans}°F <br> Approx. ${ans.toFixed(2)}°F`;
            }
        }else if(farentokelvin.checked){
            let ans = (tempValue-32) * (5/9) + 273.15;
            if(Number.isInteger(ans)){
                document.getElementById("header3").innerHTML = `${ans}K`;
            }else{
                document.getElementById("header3").innerHTML = `${ans}K <br> Approx. ${ans.toFixed(2)}K`
            }
        }
    }
}


document.getElementById("button").onclick = function(){
    rawInput = document.getElementById("input-box").value.trim();
    if(rawInput==="" && (toKelvin.checked || tofaren.checked || farentokelvin.checked)){
        document.getElementById("header3").textContent = `Input must not be empty!`;
        return;
    }
    inputValue = Number(rawInput);

    if(isNaN(inputValue)){
        document.getElementById("header3").textContent = `Input must be a number!`;
        return;
    }
    if(!toKelvin.checked && !tofaren.checked && !farentokelvin.checked){
        document.getElementById("header3").textContent = `Please choose a conversion type`;
        return;
    }
    doConversion(inputValue);
}


document.getElementById("reset").onclick = function(){
    reverseButtonPressed = 0;

    document.getElementById("input-box").value = "";
    document.getElementById("header3").textContent = "";
    document.getElementById("toKelvin").checked = false;
    document.getElementById("tofaren").checked = false;
    document.getElementById("farentokelvin").checked = false;

    inputBox.placeholder = "value goes here"

    kelvin.textContent = "°C to K";
    faren.textContent = "°C to °F";
    fartokev.textContent = "°F to K";
}

document.getElementById("reverse").onclick = function(){
    reverseButtonPressed +=1 ;
    updatePlaceHolder();
    if(kelvin.textContent==="°C to K"){
        kelvin.textContent = "K to °C";
        faren.textContent = "°F to °C";
        fartokev.textContent = "K to °F";
    }else{
        kelvin.textContent = "°C to K";
        faren.textContent = "°C to °F";
        fartokev.textContent = "°F to K";
    }
}