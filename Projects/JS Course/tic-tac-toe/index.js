console.log("Start of Script")

class Player {
    constructor(name, marker) {
        this.name = name;
        this.marker = marker;
        this.sayName = function() {
            console.log(`Hello, I'm ${this.name}!`);
          };
    }
}

class Cell{
    constructor(){
        this.val = 0
        this.occupiedBy = NaN
    }
    get val(){
        return this._val;
    }
    set val(val){
        this._val = val;
    }
    get occupiedBy(){
        return this._occupiedBy;
    }
    set occupiedBy(occupiedBy){
        this._occupiedBy = occupiedBy;
    }
}

class Gameboard{
    constructor(p1, p2){
        //set init values
        // this.Player1 = p1 
        // this.Player2 = p2
        var rows = 3;
        var columns = 3;
        this.board = []
        //construct init board
        for (let i = 0; i < rows; i++) {
            this.board[i] = [];
            for (let j = 0; j < columns; j++) {
                this.board[i].push(new Cell());
            }
          }
        //print board to console
        this.printBoardtoConsole = () => {
            const boardWithCellValues = this.board.map((row) => row.map((cell) => cell.val))
            console.log(boardWithCellValues);
        };
    }
}

class Game {
    constructor(){
        this.p1 = new Player("P1","X")
        this.p2 = new Player("P2","O")
        this.gameBoard = new Gameboard()
        this.activePlayer = this.p1
        this.switchPlayerTurn = () => {
            this.activePlayer = this.activePlayer === this.p1 ? this.p2 : this.p1;
          };
        this.getActivePlayer = () => this.activePlayer;

        
    }
}

class ScreenController {
    constructor(){
        this.game = new Game()
        this.playerTurnDiv = document.querySelector('.turn');
        const boardDiv = document.querySelector('.board');
        this.updateScreen = () => {
            // clear the board
            boardDiv.textContent = "";
        
            // get the newest version of the board and player turn
            const board = this.game.gameBoard.board;
            const activePlayer = this.game.getActivePlayer();
        
            // Display player's turn
            this.playerTurnDiv.textContent = `${activePlayer.name}'s turn...`
        
            // Render board squares
            board.forEach(row => {
              row.forEach((cell, index) => {
                // Anything clickable should be a button!!
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");
                // Create a data attribute to identify the column
                // This makes it easier to pass into our `playRound` function 
                cellButton.dataset.column = index
                cellButton.textContent = cell.val;
                boardDiv.appendChild(cellButton);
              })
            })
          }
    }

}

start = new ScreenController()
// start.game.gameBoard.printBoardtoConsole()
start.updateScreen()
console.log("End of Script")
