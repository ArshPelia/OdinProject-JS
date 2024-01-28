import { Gameboard } from "./gameboard";

class Player {
    constructor(name) {
        this.name = name;
        this.gameBoard = new Gameboard();
        this.sayName = function () {
            console.log(`Hello, I'm ${this.name}!`);
        };
    }
}

class Game {
    constructor() {
        this.p1 = new Player("P1");
        this.p2 = new Player("P2");
        this.activePlayer = this.p1;
        this.inActivePlayer = this.p2;
        this.getActivePlayer = () => this.activePlayer;
    }

    switchPlayerTurn() {
        this.activePlayer = this.activePlayer === this.p1 ? this.p2 : this.p1;
        this.inActivePlayer = this.inActivePlayer === this.p1 ? this.p2 : this.p1;
    }

    playRound(idx) {
        console.log(`${this.getActivePlayer().name} is striking at: ${idx}...`);
        if (this.inActivePlayer.gameBoard.receiveAttack(idx) == -1) {
            return;
        }

        // console.log("Old Active Player: " + this.activePlayer.name + "'s board: ");
        // this.activePlayer.gameBoard.printToConsole();
        // console.log("Old Inactive Player: " + this.inActivePlayer.name + "'s board: ");
        // this.inActivePlayer.gameBoard.printToConsole();

        // Check for a winner after the attack
        const winner = this.checkForWinner();
        if (winner) {
            console.log(`Player ${winner.name} wins!`);
            const boardDiv = document.querySelector('.winner');           
                // clear the board
            boardDiv.textContent = "";
            boardDiv.textContent = "Winner: " + winner.name;
            // You can handle the win condition here, e.g., display a message or restart the game.
        }

        // Switch player turns
        this.switchPlayerTurn();
        // console.log("Current Active Player: " + this.activePlayer.name + "'s board: ");
        // this.activePlayer.gameBoard.printToConsole();
        console.log("Current Active Player: " + this.activePlayer.name + "'s ships: ");
        console.log(this.activePlayer.gameBoard.ships);


        // console.log("Current Inactive Player: " + this.inActivePlayer.name + "'s board: ");
        // this.inActivePlayer.gameBoard.printToConsole();
        console.log("Current Inactive Player: " + this.inActivePlayer.name + "'s ships: ");
        console.log(this.inActivePlayer.gameBoard.ships);
    }

    checkForWinner() {
        const inactivePlayerShips = this.inActivePlayer.gameBoard.ships;
        const allSunk = inactivePlayerShips.every(ship => ship.isSunk);
        
        if (allSunk) {
            return this.activePlayer;
        }

        return null;
    }
}

export { Game };
