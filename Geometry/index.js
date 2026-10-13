let radius;
const pi =  Math.PI;
let answer;

document.getElementById("button").onclick = function(){
    radius=Number(document.getElementById("input-box").value);
    answer=2 * radius * pi;
    document.getElementById("result").innerHTML=`Circumference: ${answer}<br>
    Approx. ${answer.toFixed(2)}
    `;
}