// The game board is stored as an array.
//Every time a player clicks a cell their play is stored here. 

const gameBoard = (function() {
    let board = ["","","","","","","","",""]
    const display = document.querySelector(".display-winner")
    return {board, display}
})()

console.log(gameBoard.board)




const playerFactory = (letter) => {
    const playerLetter = letter
    let turnStatus = false
    return {playerLetter, turnStatus}
}

const gameLogic = (function() {
    const player1 = playerFactory("X")
    const player2 = playerFactory("O")
    let count = 0



//add event listeners to cells

function clickCell() {
    console.log(3)
    const cells = document.querySelectorAll(".cell")
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", () => {
        count++
        console.log(count)
        
        if (count % 2 === 0){
            player1.turnStatus = true
            player2.turnStatus = false
            
            if(cells[i].textContent === ""){
            cells[i].textContent = "O"
            gameBoard.board[i] = "O"
            }
            else {return}
        }

        else {
            player2.turnStatus = true
            player1.turnStatus = false
            
            if (cells[i].textContent === ""){
            cells[i].textContent = "X"
            gameBoard.board[i] = "X"
            }
            else {return}
        }
        checkWin()
        
    })

}
}

//loop through win condition array and see if board array contains exes and ohs at those points
function checkWin(){

    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for (let j = 0; j < winConditions.length; j++){
    if (gameBoard.board[winConditions[j][0]] === "X" && gameBoard.board[winConditions[j][1]] === "X" && gameBoard.board[winConditions[j][2]] === "X"){
        gameBoard.display.textContent = "Player One Wins"
    }

    else  if (gameBoard.board[winConditions[j][0]] === "O" && gameBoard.board[winConditions[j][1]] === "O" && gameBoard.board[winConditions[j][2]] === "O"){
        gameBoard.display.textContent = "Player Two Wins"
    
    }

    else continue
}
}

return {clickCell}


})()

gameLogic.clickCell()
