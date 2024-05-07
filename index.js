
let randomNumber1 = Math.floor(Math.random() * 6);
let randomNumber2 = Math.floor(Math.random() * 6);

console.log(typeof(randomNumber1))

console.log(randomNumber1, randomNumber2)

const image1 = document.querySelector(".img1")
const image2 = document.querySelector(".img2")


switch (String(randomNumber1)) {
    case "0":
        
        image1.src="./images/dice1.png"
        break;
    case "1":
        
        image1.src="./images/dice2.png"
        break;
    case "2":
        
        image1.src="./images/dice3.png"
        break;
    case "3":
        
        image1.src="./images/dice4.png"
        break
    case "4":
        
        image1.src="./images/dice5.png"
        break
    case "5":
        
        image1.src="./images/dice6.png"
        break
    default:
        break
    break;
}
switch (String(randomNumber2)) {
    case "0":
        
        image2.src="./images/dice1.png"
        break;
    case "1":
        
        image2.src="./images/dice2.png"
        break;
    case "2":
        
        image2.src="./images/dice3.png"
        break;
    case "3":
        
        image2.src="./images/dice4.png"
        break
    case "4":
        
        image2.src="./images/dice5.png"
        break
    case "5":
        
        image2.src="./images/dice6.png"
        break
    default:
        break
    break;
}
console.log('complete')

const title = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
    title.innerHTML = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2){
    title.innerHTML = "Player 2 Wins!"
} else {
    title.innerHTML = "It's a Tie!"
}