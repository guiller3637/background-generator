var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomColor");
var randomColor ="";

setGradient();

function setGradient (){
  console.log(color1.value);
    body.style.background = "linear-gradient(to right, "+ color1.value 
    + ", "
    +color2.value
    +")";
  
    
    randomBtn.style.background = "linear-gradient(to right, "+ color1.value 
    + ", "
    +color2.value
    +")";
    
    css.textContent = body.style.background + ";";
}
function setRandomGradient(){
  
  console.log(color1);
   
    var colorBtn1 ="#" + randomNumber();
    var colorBtn2 ="#" + randomNumber();

    body.style.background = "linear-gradient(to right, "+ colorBtn1 
    + ", "
    +colorBtn2
    +")";

    randomBtn.style.background = "linear-gradient(to right, "+ colorBtn1 
    + ", "
    +colorBtn2
    +")";

    css.textContent = body.style.background + ";";
    
}
function randomNumber(){
  randomColor = Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click",setRandomGradient);