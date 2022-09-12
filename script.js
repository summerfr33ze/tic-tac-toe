const gameContainer = document.querySelector(".game-container")
const cells = document.querySelectorAll(".cell")
const displayWinner = document.querySelector(".display-winner")


let count = 0





function clickCell() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", () => {
        count++
        
        if (count % 2 === 0){
            if(cells[i].textContent === ""){
            cells[i].textContent = "X"
            }
            else {return}
        }

        else {
            if(cells[i].textContent === ""){
            cells[i].textContent = "O"
            }
            else {return}
        }
        checkWin()
        
    })

}


    
}

function checkWin () {

    if (cells[0].textContent === "X" && cells[1].textContent === "X" && cells[2].textContent === "X"){
    displayWinner.textContent = "Player Two Wins"
    }
    
    
    else if (cells[3].textContent === "X" && cells[4].textContent === "X" && cells[5].textContent === "X"){
        displayWinner.textContent = "Player Two Wins"
    }
    
    else if (cells[6].textContent === "X" && cells[7].textContent === "X" && cells[8].textContent === "X"){
        displayWinner.textContent = "Player Two Wins"
    }
    
    else if (cells[0].textContent === "X" && cells[3].textContent === "X" && cells[6].textContent === "X"){
        displayWinner.textContent = "Player Two Wins"
        }
        
    else if (cells[1].textContent === "X" && cells[4].textContent === "X" && cells[7].textContent === "X"){
        displayWinner.textContent = "Player Two Wins"
    }
        
    else if (cells[2].textContent === "X" && cells[5].textContent === "X" && cells[8].textContent === "X"){
    displayWinner.textContent = "Player Two Wins"
    }
    
    else if (cells[0].textContent === "X" && cells[4].textContent === "X" && cells[8].textContent === "X"){
    displayWinner.textContent = "Player Two Wins"
    }
    else if (cells[2].textContent === "X" && cells[4].textContent === "X" && cells[6].textContent === "X"){
    displayWinner.textContent = "Player Two Wins"
    }
    else if (cells[0].textContent === "O" && cells[1].textContent === "O" && cells[2].textContent === "O"){
        displayWinner.textContent = "Player One Wins"
    }
        
    else if (cells[3].textContent === "O" && cells[4].textContent === "O" && cells[5].textContent === "O"){
        displayWinner.textContent = "Player One Wins"
    }
        
    else if (cells[6].textContent === "O" && cells[7].textContent === "O" && cells[8].textContent === "O"){
        displayWinner.textContent = "Player One Wins"
    }
        
    else if (cells[0].textContent === "O" && cells[3].textContent === "O" && cells[6].textContent === "O"){
        displayWinner.textContent = "Player One Wins"
    }
            
    else if (cells[1].textContent === "O" && cells[4].textContent === "O" && cells[7].textContent === "O"){
        displayWinner.textContent =  "Player One Wins"
    }
            
    else if (cells[2].textContent === "O" && cells[5].textContent === "O" && cells[8].textContent === "O"){
        displayWinner.textContent = "Player One Wins"
    }
    
    else if (cells[0].textContent === "O" && cells[4].textContent === "O" && cells[8].textContent === "O"){
    displayWinner.textContent = "Player One Wins"
    }
    else if (cells[2].textContent === "O" && cells[4].textContent === "O" && cells[6].textContent === "O"){
    displayWinner.textContent = "Player One Wins"
    }
    
    else{return}
    
    }



clickCell()

    

