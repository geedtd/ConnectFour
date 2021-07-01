//constants (sounds,etc)

//HTML Elements
const status = document.querySelector('.status')
const resetBtn = document.querySelector('.reset')
const board = document.querySelectorAll('.puckHolder')
//
console.log(board)
//variables 
let gameWon = null;
let player1Turn ;


let divsArr = [...board]
// divsArr = divsArr.map(x => x = null)

//event listeners
for ( const boardDiv of board ) {
    boardDiv.addEventListener('click', puckClick)
}
resetBtn.addEventListener('click', resetGame)

//functions
init()

function init () {
    status.innerText = 'Click on a circle to start'
    resetBtn.setAttribute('hidden', true)
    gameWon = false
    for (const boardDiv of board) {
        boardDiv.classList.remove('clicked')
        boardDiv.classList.remove('red')
        boardDiv.classList.remove('yellow')
    }
    player1Turn = true
    
    divsArr = divsArr.map(x => x = null)


}

function puckClick(e) {
    const classList = e.target.classList

    if (gameWon || classList[2] === 'clicked') {
        return
    }
    if (player1Turn) {
        let boardPuck = board[(Array.from(board).indexOf(e.target))+7]
        player1Turn = !player1Turn
        classList.add('red')
        status.innerText = "Player 2's Turn 🟡 "
        divsArr[Array.from(board).indexOf(e.target)] = 1
        classList.add('clicked')
       if (board[(Array.from(board).indexOf(e.target))+7].classList[2]) {
           console.log('puck below') 
       }else {
           console.log('nothing below')
       }
    
        //divsArr[index of clicked element on board array]
    } else {
        player1Turn = !player1Turn
        classList.add('yellow')
        status.innerText = "Player 1's Turn 🔴 "
        divsArr[Array.from(board).indexOf(e.target)] = 2
        if (board[(Array.from(board).indexOf(e.target))+7].classList[2]) {
            console.log('puck below') 
        }else {
            console.log('nothing below')
        }
        //stackPucks(e)

    }
    console.log(divsArr)
    classList.add('clicked')
    resetBtn.removeAttribute('hidden')
    checkWin()
}

function resetGame() {
    init()
}

function renderWin() {
    gameWon = !gameWon
    if (!player1Turn) {
        status.innerText = ('Player 1 Is the Winner')
    } else {
        status.innerText = ('Player 2 Is the Winner')
    }
}

function checkWin() {
    if (divsArr[0] === 1 && divsArr[1] === 1 && divsArr[2] === 1 && divsArr[3] === 1) {
        renderWin()
    }
    console.log('party')
}
// function stackPucks(e) {
//     console.log(board[Array.from(board).indexOf(this(e.target))])
//     //if (board[Array.from(board).indexOf(e.target)]) {

//     // }
// }

//get nodeList? from div squares, split up into arrays representing sections that a winning 4 consecutive pucks could be played 
//create function (most likely a for loop but will check array iterators, that checks to see if there are 4 consecutive pucks in said arrays
//if winning conditions are met, execute function that will display winner text, who won and stops the game from continued to be played


// if (board[Array.from(board).indexOf(e.target)].classList[2] === 'clicked') {
//     console.log('something below')
// } else {
//     console.log('nothing below')
// }
