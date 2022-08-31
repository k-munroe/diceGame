let randomNumber1 = Math.floor(Math.random()*6) + 1;

let randomNumber2 = Math.floor(Math.random()*6) + 1;

let randomDiceImage = "dice" + randomNumber1 + ".png";

let randomDiceImageTwo = "dice" + randomNumber2 + ".png";

let randomImageSource = "images/" + randomDiceImage;

let randomImageSourceTwo = "images/" + randomDiceImageTwo;

let image1 = document.querySelectorAll("img")[0];

let image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);

image2.setAttribute("src", randomImageSourceTwo);

