import { Game } from "./game";

class ScreenController {
    constructor(){
        this.game = new Game()
        this.playerTurnDiv = document.querySelector('.turn');
        const boardDiv = document.querySelector('.board');
        const p1Ships = document.querySelector('.p1Ships');
        const p2Ships = document.querySelector('.p2Ships');
        this.updateScreen = () => {
          
          
            // clear the board
            boardDiv.textContent = "";
        
            // get the newest version of the board and player turn
            // const board = this.game.activePlayer.gameBoard.board;
            const activePlayer = this.game.getActivePlayer();
            const board = activePlayer.gameBoard.board;

        
            // Display player's turn
            this.playerTurnDiv.textContent = `${activePlayer.name}'s turn...`
            var idx = 0
            // Render board squares
            board.forEach(row => {
              row.forEach((cell, index) => {
                idx++
                // console.log(idx)
                // Anything clickable should be a button!!
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");
                // Create a data attribute to identify the column
                // This makes it easier to pass into our `playRound` function 
                cellButton.dataset.column = index
                cellButton.dataset.idx = idx
                cellButton.textContent = cell.getValue();
                if(cell.getValue() == "X"){
                  cellButton.style.backgroundColor = "red"
                }else if (cell.getValue() == "M"){
                  cellButton.style.backgroundColor = "blue"
                }else if (cell.getValue() == "H"){
                  cellButton.style.backgroundColor = "green"

                }
                // cellButton.textContent = cell.getValue() + "-" + idx;
                // cellButton.textContent = idx;
                boardDiv.appendChild(cellButton);
              })
            })
          }
            // Add event listener for the board
        const clickHandlerBoard = (e) => {
            const selectedIdx = e.target.dataset.idx;
            // console.log("Tile: "+ selectedIdx + " clicked!");
            
            // Make sure I've clicked a column and not the gaps in between
            if (!selectedIdx) return;

            this.game.playRound(selectedIdx);
            this.updateScreen();
          };
            
        boardDiv.addEventListener("click", clickHandlerBoard);
        this.updateScreen()
    }
    

}

export {ScreenController}