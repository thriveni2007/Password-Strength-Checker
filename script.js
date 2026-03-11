 let password=document.getElementById("password");
let toggle=document.getElementById("toggle");

let bar=document.getElementById("strength-bar");
let text=document.getElementById("strength-text");

let lengthRule=document.getElementById("length");
let upperRule=document.getElementById("upper");
let numberRule=document.getElementById("number");
let specialRule=document.getElementById("special");

toggle.onclick=function(){

if(password.type==="password"){
password.type="text";
toggle.innerText="Hide";
}else{
password.type="password";
toggle.innerText="Show";
}

};

password.addEventListener("input",function(){

let pass=password.value;

let score=0;

if(pass.length>=8){
score++;
lengthRule.classList.add("valid");
}else{
lengthRule.classList.remove("valid");
}

if(/[A-Z]/.test(pass)){
score++;
upperRule.classList.add("valid");
}else{
upperRule.classList.remove("valid");
}

if(/[0-9]/.test(pass)){
score++;
numberRule.classList.add("valid");
}else{
numberRule.classList.remove("valid");
}

if(/[!@#$%^&*]/.test(pass)){
score++;
specialRule.classList.add("valid");
}else{
specialRule.classList.remove("valid");
}

if(score==1){
bar.style.width="25%";
bar.style.background="red";
text.innerText="Weak Password";
}

else if(score==2 || score==3){
bar.style.width="60%";
bar.style.background="orange";
text.innerText="Medium Password";
}

else if(score==4){
bar.style.width="100%";
bar.style.background="green";
text.innerText="Strong Password";
}

else{
bar.style.width="0%";
text.innerText="";
}

});