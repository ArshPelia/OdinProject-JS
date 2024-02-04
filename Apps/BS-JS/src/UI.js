import { Game } from "./game";

class ScreenController {
    constructor() {
        this.game = new Game();
        this.playerTurnDiv = document.querySelector('.turn');
        const boardDiv1 = document.querySelector('#b1');
        const boardDiv2 = document.querySelector('#b2');
        this.activeBoardDiv = boardDiv1; // Assuming board1 is active initially
        this.inactiveBoardDiv = boardDiv2;

        this.updateScreen = () => {
            const activePlayer = this.game.activeBoard.player;
            this.playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;
        
            // Update active and inactive board divs
            this.activeBoardDiv = activePlayer === this.game.b1.player ? boardDiv1 : boardDiv2;
            this.inactiveBoardDiv = this.activeBoardDiv === boardDiv1 ? boardDiv2 : boardDiv1;
        
            // Add event listener after updating the boards
            this.activeBoardDiv.addEventListener("click", clickHandlerBoard);
            this.inactiveBoardDiv.removeEventListener("click", clickHandlerBoard);
        
            // Refresh the display of both boards
            this.updateBoard(this.activeBoardDiv, this.game.activeBoard);
            this.updateBoard(this.inactiveBoardDiv, this.game.inactiveBoard);
        }
        
        const clickHandlerBoard = (e) => {
            console.log('click; active board: ' + this.game.activeBoard.player.name)
            const selectedIdx = e.target.dataset.idx;
            if (!selectedIdx) return;
            // console.log('click; curr target: ' + e.currentTarget)

            if (e.currentTarget === this.activeBoardDiv) {
                this.game.playRound(selectedIdx);
                this.updateScreen();
            }
        };

        this.updateScreen();
    }
    updateBoard(boardDiv, gameboard) {
        boardDiv.textContent = "";

        gameboard.board.forEach((row, rowIndex) => {
            row.forEach((cell, index) => {
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");
                cellButton.dataset.idx = rowIndex * gameboard.cols + index + 1; // Calculate the correct idx
                cellButton.textContent = cell.getValue();

                // Customize cell appearance based on the value
                this.styleCell(cellButton, cell.getValue());

                boardDiv.appendChild(cellButton);
            });
        });
    }

    styleCell(cellButton, cellValue) {
        switch (cellValue) {
            case "X":
                cellButton.style.backgroundColor = "red";
                break;
            case "M":
                cellButton.style.backgroundColor = "blue";
                break;
            case "H":
                cellButton.style.backgroundColor = "green";
                break;
            default:
                // Handle other cell values if needed
                break;
        }
    }
}

export { ScreenController };
