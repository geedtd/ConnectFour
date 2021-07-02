//constants (sounds,etc)
const winningCombos = [
    //horizontal winning combos
    [0,1,2,3],[1,2,3,4],[2,3,4,5],[3,4,5,6],
    [7,8,9,10],[8,9,10,11],[9,10,11,12],[10,11,12,13],
    [14,15,16,17],[15,16,17,18],[16,17,18,19],[17,18,19,20],
    [21,22,23,24],[22,23,24,25],[23,24,25,26],[24,25,26,27],
    [28,29,30,31],[29,30,31,32],[30,31,32,33],[31,32,33,34],
    [35,36,37,38],[36,37,38,39],[37,38,39,40],[38,39,40,41],

    //vertical winning combos
    [0,7,14,21],[7,14,21,28],[14,21,28,35],
    [1,8,15,22],[8,15,22,29],[15,22,29,36],
    [2,9,16,23],[9,16,23,30],[16,23,30,37],
    [3,10,17,24],[10,17,24,31],[17,24,31,38],
    [4,11,18,25],[11,18,25,32],[18,25,32,39],
    [5,12,19,26],[12,19,26,33],[19,26,33,40],
    [6,13,20,27],[13,20,27,34],[20,27,34,41],

    //diagonal winning combos
    [14,22,30,38],[7,15,23,31],[15,23,31,39],[0,8,16,24],[8,16,24,32],[16,24,32,40],
    [1,9,17,25],[9,17,25,33],[17,25,33,41],[2,10,18,26],[10,18,26,34],[3,11,19,27],
    [21,15,9,3],[28,22,16,10],[22,16,10,4],[35,29,23,17],[29,23,17,11],[23,17,11,5],
    [35,29,23,17],[29,23,17,11],[23,17,11,5],[36,30,24,18],[30,24,18,12],[24,18,12,6],
    [37,31,25,19],[31,25,19,13],[38,32,26,20]
]
//HTML Elements
const status = document.querySelector('.status')
const resetBtn = document.querySelector('.reset')
const board = document.querySelectorAll('.puckHolder')
const nightMode = document.querySelector('.nightBtn')
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
nightMode.addEventListener('click', nightBtn)

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
        if (boardDiv.classList[1] === 'hiddenPuck') {
            boardDiv.classList.add('clicked')
        }
    }
    for (i = 42; i < length.board; i++) {
        board[i].classList.add('clicked')
    }
    player1Turn = true     
    divsArr = divsArr.map(x => x = null)


}

function puckClick(e) {
    const classList = e.target.classList


    if (gameWon || classList[2] === 'clicked') {
        return
    }
    if (board[(Array.from(board).indexOf(e.target))+ 7 ].classList[2]) {
        if (player1Turn) {
            player1Turn = !player1Turn
            classList.add('red')
            status.innerText = "Player 2's Turn 🟡 "
            divsArr[Array.from(board).indexOf(e.target)] = 1
            classList.add('clicked')

        } else {
            player1Turn = !player1Turn
            classList.add('yellow')
            status.innerText = "Player 1's Turn 🔴 "
            divsArr[Array.from(board).indexOf(e.target)] = 2
            classList.add('clicked') 
        }     
    }else {
        status.innerText += "\nPlease click on a space with a puck \n below or an empty bottom space"
    }

    //console.log(divsArr)
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

function checkWin () {
    console.log(divsArr)
   for ( i = 0; i < winningCombos.length ; i++) {
    let connect4 = winningCombos[i]
    console.log(connect4)
    if (connect4.every(indx=>divsArr[indx] === 1)){
        console.log('player1 won')
    }else if (connect4.every(indx=>divsArr[indx] === 2)) {
        console.log('player 2 won')
    }

    // divsArr
   }
}

function nightBtn() {
    console.log('clicked nightmode')
}

//get nodeList? from div squares, split up into arrays representing sections that a winning 4 consecutive pucks could be played 
//create function (most likely a for loop but will check array iterators, that checks to see if there are 4 consecutive pucks in said arrays
//if winning conditions are met, execute function that will display winner text, who won and stops the game from continued to be played


// if (board[Array.from(board).indexOf(e.target)].classList[2] === 'clicked') {
//     console.log('something below')
// } else {
//     console.log('nothing below')
// }

// player1Turn = !player1Turn
        // classList.add('yellow')
        // status.innerText = "Player 1's Turn 🔴 "
        // divsArr[Array.from(board).indexOf(e.target)] = 2
        // classList.add('clicked')
        


        // function checkBelow() {
        //     let x = 0;
        //     console.log(x)
        //     console.log(board[(Array.from(board).indexOf(e.target))+ x ].classList[2])
        //     // const newIndexBelow = x + 7
        //     // if (newIndexBelow < 34) {
        //     //     checkBelow(newIndexBelow)
        //     // }
    
        // } 