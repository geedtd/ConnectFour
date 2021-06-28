//constants (sounds,etc)

//HTML Elements
const status = document.querySelector('.status')
const resetBtn = document.querySelector('.reset')
const board = document.getElementsByClassName('gameboard')
//

//variables 
const redPuck = '0' //will change to background-color changing event
const yellowPuck = '1' //will change to background-color changing event 
let gameWon = null;
let player1Turn = true;

//event listeners
for ( const boardDiv of board ) {
    //const isClicked = false;
    boardDiv.addEventListener('click', puckClick)

}

//functions
init()

function init () {
    status.innerText = 'Click on a circle to start'
    resetBtn.setAttribute('hidden', true)
    gameWon = false
}
function puckClick(e) {
    console.log(e)
    resetBtn.removeAttribute('hidden')
    const classList = e.target.classList

    if (gameWon || classList[2] === 'clicked') {
        return
    }
    if (player1Turn) {
        player1Turn = !player1Turn
        classList.add('red')
        status.innerText = "Player 2's Turn"
    } else {
        player1Turn = !player1Turn
        classList.add('yellow')
        status.innerText = "Player 1's Turn"
    }
    classList.add('clicked')
    // const colorChange = e.target

    // if () {

    // }

}
function reset() {

}
console.log(board)

