let randomNumber1 = Math.floor(Math.random()*6) + 1;

let dice_one = document.getElementById("img1").src;

if (randomNumber1 == 1){
    dice_one = "images/dice1.png";
}
else if (randomNumber1 == 2){
    dice_one = "images/dice2.png";
}

else if (randomNumber1 == 3){
    dice_one = "images/dice3.png";
}

else if (randomNumber1 == 4){
    dice_one = "images/dice4.png";
}

else if (randomNumber1 == 5){
    dice_one = "images/dice5.png";
}

else if (randomNumber1 == 6){
    dice_one = "images/dice6.png";
}

