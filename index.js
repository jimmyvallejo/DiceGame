let randomNumber1 = Math.floor(Math.random() *6) + 1;

var diced = "dice" + randomNumber1 + ".png";

var sequence = "images/" + diced;

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src", sequence)




let randomNumber2 = Math.floor(Math.random() *6) + 1;

var diced = "dice" + randomNumber2 + ".png";

var sequence = "images/" + diced;

var image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src", sequence)


if (randomNumber1 > randomNumber2){
  document.querySelector('h1').innerHTML = "🎉 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1){
  document.querySelector('h1').innerHTML = "🎉 Player 2 Wins!";
} else {
  document.querySelector('h1').innerHTML = "😐 Draw...";
}
