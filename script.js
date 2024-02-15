let firstCard = 11
let secondCard = 8
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let message = " "

let message_El = document.getElementById("message_el")
let sum_El = document.querySelector("#sum_el")

console.log(sum_El);

function startGame() {
    sum_El.textContent = "Sums : " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card ? 😀"
    } else if (sum === 21) {
        message = "Congratulation you've got Black Jack!👏🏽"
        hasBlackJack = true
    } else {
        message = "Oppss, you are out of the game! 😭"
        isAlive = (false)
    }
    // to display the message
    message_El.textContent = message

}


