let username;
let password;

document.getElementById("sign-in").onclick=function(){
    username=document.getElementById("email-box").value;
    password=document.getElementById("password-box").value;
    console.log(`Email:${username}`);
    console.log(`Password:${password}`)
    document.getElementById("heading").textContent=`Welcome, ${username}`
}