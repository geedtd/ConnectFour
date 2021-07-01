//constants (sounds,etc)

//HTML Elements
const status = document.querySelector('.status')
const resetBtn = document.querySelector('.reset')
const board = document.querySelectorAll('.puckHolder')
//
console.log(board)
//variables 
const redPuck = '0' //will change to background-color changing event
const yellowPuck = '1' //will change to background-color changing event 
let gameWon = null;
let player1Turn = true;


let divsArr = [...board]
console.log(divsArr)
// const red = 'div.puckHolder.red.clicked'
// const yellow = 'div.puckHolder.yellow.clicked'

divsArr = divsArr.map(x => x = null)
// console.log(indexArr)
//divsArr.forEach(element => console.log(element))
// redIndx = []
// yellowIndx = []


//event listeners
for ( const boardDiv of board ) {
    //const isClicked = false;
    boardDiv.addEventListener('click', puckClick)

resetBtn.addEventListener('click', resetGame)
}

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
}
function puckClick(e) {
    const classList = e.target.classList

    if (gameWon || classList[2] === 'clicked') {
        return
    }
    if (player1Turn) {
        player1Turn = !player1Turn
        classList.add('red')
        status.innerText = "Player 2's Turn 🟡 "
        divsArr[Array.from(board).indexOf(e.target)] = 1
    } else {
        player1Turn = !player1Turn
        classList.add('yellow')
        status.innerText = "Player 1's Turn 🔴 "
        divsArr[Array.from(board).indexOf(e.target)] = 2

    }
    console.log(divsArr)
    classList.add('clicked')
    //console.log(board.indexOf(e.target))
    resetBtn.removeAttribute('hidden')
    //console.log(indexArr)
    checkWin()
}
function resetGame() {
    init()
}


function checkWin() {
    // for (i = 0; i < length.divsArr; i++) {
    //     if (divsArr[i] = red) {
             console.log('party')
    //     }
    // }
}

//get nodeList? from div squares, split up into arrays representing sections that a winning 4 consecutive pucks could be played 
//create function (most likely a for loop but will check array iterators, that checks to see if there are 4 consecutive pucks in said arrays
//if winning conditions are met, execute function that will display winner text, who won and stops the game from continued to be played



