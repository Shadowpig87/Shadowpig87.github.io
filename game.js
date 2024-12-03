let result = "0";



//document.getElementById("mySubmit1").onclick = function(){
    //input = parseFloat(input);
   document.getElementById("mySubmit1").onclick = function(){
    result = result + document.getElementById("number1").value;
    result = Number(result);
document.getElementById("h3").textContent = result + "Answer";}


let leg1;
let leg2;
let hypotenuse; 

document.getElementById("hySubmit").onclick = function(){
leg1 = Number(leg1)
leg2 = Number(leg2)
hypotenuse = document.getElementById("leg1").value**2 + document.getElementById("leg2").value**2;
answer = Math.sqrt(hypotenuse);
document.getElementById("hyh3").textContent = answer;}
console.log(Math.sqrt(81))




