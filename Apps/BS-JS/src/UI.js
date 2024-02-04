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
            this.updateBoard(boardDiv1, this.game.b1);
            this.updateBoard(boardDiv2, this.game.b2);

            const activePlayer = this.game.activeBoard.player;
            this.playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;
        };

        const clickHandlerBoard = (e) => {
            const selectedIdx = e.target.dataset.idx;
            if (!selectedIdx) return;

            if (e.currentTarget === this.activeBoardDiv) {
                this.game.playRound(selectedIdx);
                this.updateScreen();
            }
        };

        boardDiv1.addEventListener("click", clickHandlerBoard);
        boardDiv2.addEventListener("click", clickHandlerBoard);

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
