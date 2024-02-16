let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let message = " "

let message_El = document.querySelector("#message_el")
let sum_El = document.querySelector("#sum_el")
let cards_El = document.querySelector("#cards_el")

console.log(cards);

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true

    // Generate two random numbers
    let firstCard = getRandomCard()
    let secondCard = getRandomCard

    // Re-assign the cards and sum variables so that the game can start
    cards = [firstRanNumer, secondRanNumber]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    // render firstCard and secondCard
    cards_El.textContent = "Cards :"

    // loop to render out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cards_El.textContent += cards[i] + " "
    }

    sum_El.textContent = "Sums : " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card ? 😀"
    } else if (sum === 21) {
        message = "Congratulation you've got Black Jack! 👏🏽"
        hasBlackJack = true
    } else {
        message = "Opss, you are out of the game! 😭"
        isAlive = (false)
    }
    // to display the message
    message_El.textContent = message
}

function newCard() {
    let card = getRandomCard()
    sum += card

    //push the card to the cards array
    cards.push(card)

    renderGame()
}



