var myPic = new Array ("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png")
var randomNumber1 = Math.floor(Math.random() * myPic.length);

var randomNumber2 = Math.floor(Math.random() * myPic.length);

document.querySelector(".img1").setAttribute("src",myPic[randomNumber1]);
document.querySelector(".img2").setAttribute("src",myPic[randomNumber2]);


if (myPic[randomNumber1] === myPic[randomNumber2]){
    document.querySelector("h1").innerHTML = "Draw";
}
else if(myPic[randomNumber1] < myPic[randomNumber2]){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else if(myPic[randomNumber2] < myPic[randomNumber1]){
    document.querySelector("h1").innerHTML = "Player 1 Wins🚩";
}else{
    document.querySelector("h1").innerHTML = "Refresh";
}