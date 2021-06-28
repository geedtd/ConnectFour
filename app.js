//HTML Elements
const status = document.querySelector('.status')
const resetBtn = document.querySelector('.reset')

//game constants  
const redPuck = '0' //will change to background-color changing event
const yellowPuck = '1' //will change to background-color changing event
//gaem variables 
let gameWon = null;
let player1Turn = true;
//game listener

//functions
init()

function init () {
    status.innerText = 'Click on a circle to start'
    resetBtn.setAttribute('hidden', true)
    gameWon = false
}
function puckClick() {

}