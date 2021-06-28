//constants (sounds,etc)

//HTML Elements
const status = document.querySelector('.status')
const resetBtn = document.querySelector('.reset')
const board = document.getElementsByClassName('.gameboard')
//

//variables 
const redPuck = '0' //will change to background-color changing event
const yellowPuck = '1' //will change to background-color changing event 
let gameWon = null;
let player1Turn = true;

//event listeners
for ( const boardDiv of board ) {
    
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
    const colorChange = e.target

    if
}
function reset() {

}