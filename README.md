# ConnectFour
Connect Four Game 
The game I chose is Connect 4, I chose this game because while thinking of this game and how to construct it, I knew that I'd be working with arrays in new challenging ways. I also played this game with my brother when I was younger and it's a nice memory.

*** Click to play game ***
https://connect4-gerardo.netlify.app

*** Screenshots will go here ***

Pseudocode
1. Define Constants -
resetButton - after play starts, will appear and upon click reset the board   game 
statusMessage - will inform of player turn, if game is won, or no winner
cellDivs- in total there will be an array 42 characters long to store value of each unfilled slot in the actual gameboard 
2. Define Variables -
playerTurn - determines who's turn it is, in effect also showing game is still in play
isWinner - evaluates to true once a winning condition is met
3. Once app is loaded-
init function will be called - 
-will initialize 42 cells to null
-show it is Player 1's turn, will alternate between true and false, false being player 2's turn,  (I understand when developing a game that consists of more than two players numbers will be used instead of true anfalse)
-winnerVariable is set to false, will evaluate to true once winning conditon is met
-call render function which will show state of game/players turns, board values
render function -
4. Define the winning combos
-winning combos are near impossible to hard code since there are so many options, will research more on this to properly code
-thinking of a way to check 4 equal consecutive values in a form that maps the 6 columns, 7 rows, and 12 slanted rows (this kind of direction  / \ ) that would be able to hold at least 4 values
5. Handle click events -
-will change value of cellDiv clicked on that pertains to the lowest available space in that column 
-will not allow more than 6 assignment clicks per column
6. Replay button will call init, thus the game values are null