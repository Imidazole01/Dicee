// First Dice Image

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomDiceSrc1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSrc1);

// Second Dice Image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomDiceSrc2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceSrc2);

// changing the title

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 won 🚩";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 won 🚩";
}

else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}

// Here is another code which looks like OK. But a lot longer and only uses if statements.

/**
 * var randomNumber1 = Math.floor(Math.random() * 6);
 * var randomNumber2 = Math.floor(Math.random() * 6);
 * 
 * if (randomNumber1 === 0) {
 * document.querySelectorAll("img")[0].setAttribute("src", images/dice1.png);
 * }
 * if (randomNumber1 === 1) {
 * document.querySelectorAll("img")[0].setAttribute("src", images/dice2.png);
 * }
 * if (randomNumber1 === 2) {
 * document.querySelectorAll("img")[0].setAttribute("src", images/dice3.png);
 * }
 * if (randomNumber1 === 3) {
 * document.querySelectorAll("img")[0].setAttribute("src", images/dice4.png);
 * }
 * if (randomNumber1 === 4) {
 * document.querySelectorAll("img")[0].setAttribute("src", images/dice5.png);
 * }
 * if (randomNumber1 === 5) {
 * document.querySelectorAll("img")[0].setAttribute("src", images/dice6.png);
 * }
 * 
 * Write the same for randomNumber2 and changing the title as above
 */