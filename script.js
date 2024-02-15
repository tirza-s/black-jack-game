let firstCard = 11
let secondCard = 15
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = " "

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw another card ? 😀"
    } else if (sum === 21) {
        message = "Congratulation you've got Black Jack!👏🏽"
        hasBlackJack = true
    } else {
        message = "Oppss, you are out of the game! 😭"
        isAlive = (false)
    }
    console.log(message);
}



