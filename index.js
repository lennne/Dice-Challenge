var randomnumber1 = Math.random()*5;
randomnumber1=Math.round(randomnumber1)+1;

var randomimage = "dice" + randomnumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage);

var randomnumber2 = Math.random()*5;
randomnumber2=Math.round(randomnumber2)+1;
var randomimage2= "dice" + randomnumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimage2);

if (randomnumber1 === randomnumber2){
  document.querySelector("h1").innerHTML= "Draw";
  
}

if (randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}

if (randomnumber1 < randomnumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
