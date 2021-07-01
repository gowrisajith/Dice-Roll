var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();
imagePicker1();
imagePicker2();
changeTitle(randomNumber1,randomNumber2);

function imagePicker1(){

  var srcRandom1 = "images/dice" + randomNumber1 + ".png";
  document.querySelector("img.img1").setAttribute("src",srcRandom1);
}


function imagePicker2(){

  var srcRandom2 = "images/dice" + randomNumber2 + ".png";
  document.querySelector("img.img2").setAttribute("src",srcRandom2);
}

function changeTitle(randomNumber1,randomNumber2){

var heading = document.querySelector("h1");
  if(randomNumber1>randomNumber2){
    newHeading = "🏳️‍🌈 Play 1 wins!!!"
    heading.innerHTML = newHeading;
  }else if(randomNumber2>randomNumber1) {
    newHeading = "Player 2 wins! 🏳️‍🌈"
    heading.innerHTML = newHeading; 
  }else {
    newHeading = "Draw!!!"
    heading.innerHTML = newHeading;
  }
}


function getRandomNumber(){
  var randomNumber = Math.floor(Math.random()*6)+1;
  return randomNumber;
}
