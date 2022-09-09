// // variables for buttons
// const btnPlayer1 = document.querySelector('#btnPlayer1')
// const btnPlayer2 = document.querySelector('#btnPlayer2')
// const btnReset = document.querySelector('#btnReset')
// // variables for score
// const scorePlayer1 = document.querySelector('#scorePlayer1')
// const scorePlayer2 = document.querySelector('#scorePlayer2')

// // button event listeners


// let sum1 = 0
// let sum2 = 0
// // changed const to let winningNum
// let winningNum = document.querySelector('#numPlayers')
// let isGameOver = false

// btnPlayer1.addEventListener('click', function (e) {
//     if (!isGameOver) {
//         sum1 += 1
//         scorePlayer1.textContent = sum1
//         // added parseInt to convert string output of winning num to integer
//         if (sum1 === parseInt(winningNum.value)) {
//             isGameOver = true
//             scorePlayer1.classList.add('green')
//             scorePlayer2.classList.add('red')
//         }
//     }
// })

// btnPlayer2.addEventListener('click', function (e) { 
//     if (!isGameOver) {
//         sum2 += 1
//         scorePlayer2.textContent = sum2
//         if (sum2 === parseInt(winningNum.value)) {
//             isGameOver = true
//             scorePlayer2.classList.add('green')
//             scorePlayer1.classList.add('red')
//         }
//     }

// })

// // reset button

// btnReset.addEventListener('click', function () {
//     scorePlayer1.textContent = sum1 = 0
//     scorePlayer2.textContent = sum2 = 0
//     isGameOver = false
//     numPlayers.value = 1
//     scorePlayer1.classList.remove('green')
//     scorePlayer2.classList.remove('green')
//     scorePlayer1.classList.remove('red')
//     scorePlayer2.classList.remove('red')
// })

// numPlayers.addEventListener('input', function () {
//     scorePlayer1.textContent = sum1 = 0
//     scorePlayer2.textContent = sum2 = 0
//     scorePlayer1.classList.remove('green')
//     scorePlayer2.classList.remove('green')
//     scorePlayer1.classList.remove('red')
//     scorePlayer2.classList.remove('red')
// })

// Refactoring code

// Grouped all properties of player 1 and 2 into objects

let player1 = {
    button: document.querySelector('#btnPlayer1'),
    displayScore: document.querySelector('#scorePlayer1'),
    currentScore: 0,
}

let player2 = {
    button: document.querySelector('#btnPlayer2'),
    displayScore: document.querySelector('#scorePlayer2'),
    currentScore: 0,
}

const btnReset = document.querySelector('#btnReset');
const numPlayers = document.querySelector('#numPlayers');
let winningNum = numPlayers.value
isGameOver = false

//  Created a function that works for both players

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.currentScore += 1
        player.displayScore.textContent = player.currentScore
        if (player.currentScore === parseInt(numPlayers.value)) {
            isGameOver = true
            player.displayScore.classList.add('green')
            opponent.displayScore.classList.add('red')
        }
    }
}

player1.button.addEventListener('click', function () {
    updateScore(player1, player2)
})
player2.button.addEventListener('click', function () {
    updateScore(player2, player1)
})

const reset = btnReset.addEventListener('click', function () {
    player1.displayScore.textContent = player1.currentScore = 0
    player2.displayScore.textContent = player2.currentScore = 0
    isGameOver = false
    numPlayers.value = 1
    player1.displayScore.classList.remove('green')
    player1.displayScore.classList.remove('red')
    player2.displayScore.classList.remove('green')
    player2.displayScore.classList.remove('red')
})

numPlayers.addEventListener('input', function () {
    player1.displayScore.textContent = player1.currentScore = 0
    player2.displayScore.textContent = player2.currentScore = 0
    player1.displayScore.classList.remove('green')
    player1.displayScore.classList.remove('red')
    player2.displayScore.classList.remove('green')
    player2.displayScore.classList.remove('red')
})








