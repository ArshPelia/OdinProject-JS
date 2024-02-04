import { Gameboard } from "./gameboard";

class Game {
    constructor() {
        this.b1 = new Gameboard("P1");
        this.b2 = new Gameboard("P2");
        this.activeBoard = this.b1;
        this.inactiveBoard = this.b2;
        this.gameOver = false;
    }

    switchActiveBoard() {
        this.activeBoard = this.activeBoard === this.b1 ? this.b2 : this.b1;
        this.inactiveBoard = this.inactiveBoard === this.b1 ? this.b2 : this.b1;
    }

    checkForWinner() {
        const inactivePlayerShips = this.inactiveBoard.ships;
        const allSunk = inactivePlayerShips.every(ship => ship.isSunk());

        if (allSunk) {
            this.gameOver = true;
            return this.activeBoard.player;  // Return the name of the active player
        }

        return null;
    }

    isGameOver() {
        return this.gameOver;
    }

    
    playRound(idx) {
        const x = Math.floor((idx - 1) / 10);
        const y = (idx - 1) % 10;
        console.log(`${this.activeBoard.player.name} is striking at: ${idx}...`);

        let attack = this.inactiveBoard.receiveAttack(idx)
        if(attack == true){
            this.activeBoard.board[x][y].value = 'H'
        }else{
            this.activeBoard.board[x][y].value = 'M'
        }

        const winner = this.checkForWinner();
        if (winner) {
            console.log(`Player ${winner.name} wins!`);
            updateWinnerDisplay(winner.name);
            removeBoardFromDOM();
        }
    
        // Switch player turns
        this.switchActiveBoard();
    }
}
    
    // Separate UI-related functions
function updateWinnerDisplay(winnerName) {
    const win = document.querySelector('.winner');
    win.textContent = "Winner: " + winnerName;
}

function removeBoardFromDOM() {
    const boardDiv = document.querySelector('.board');
    boardDiv.remove();
}

export { Game };