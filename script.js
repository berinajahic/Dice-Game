var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;

while(rand1 == rand2)
{
    rand2 = Math.floor(Math.random() * 6) + 1;
}

var imgSrc1 = "images/dice" + rand1 + ".png";
var imgSrc2 = "images/dice" + rand2 + ".png";

document.querySelector(".img1").setAttribute("src", imgSrc1);
document.querySelector(".img2").setAttribute("src", imgSrc2);

if(rand1 > rand2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1";
}
else
{
    document.querySelector("h1").innerHTML = " Player 2 🚩";
}