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
        this.val = NaN
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
        this.dropToken = (idx, player) => {
            // Calculate row and column based on idx
            const row = Math.floor((idx - 1) / 3);
            const column = (idx - 1) % 3;
            console.log("tile Clicked Value: " + this.board[row][column].val)
            // Check if the cell is already occupied
            if (!isNaN(this.board[row][column].val) || 
            this.board[row][column].val == "X" || this.board[row][column].val == "O" ) {
                alert("Tile already occupied");
                return -1;
            }
            
            
            // Update the value of the cell
            this.board[row][column].val = player;
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
        this.playRound = (idx) => {
            console.log(
              `Dropping ${this.getActivePlayer().name}'s token into index: ${idx}...`
            );
            if (this.gameBoard.dropToken(idx, this.getActivePlayer().marker) == -1){
                return
            };
        
            /*  This is where we would check for a winner and handle that logic,
                such as a win message. */
        
            this.switchPlayerTurn();
            // printNewRound();
          };
        
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
                cellButton.textContent = cell.val + "-" + idx;
                // cellButton.textContent = idx;
                boardDiv.appendChild(cellButton);
              })
            })
          }
            // Add event listener for the board
        const clickHandlerBoard = (e) => {
            const selectedIdx = e.target.dataset.idx;
            console.log("Tile: "+ selectedIdx + " clicked!");
            
            // Make sure I've clicked a column and not the gaps in between
            if (!selectedIdx) return;

            this.game.playRound(selectedIdx);
            this.updateScreen();
        };
            boardDiv.addEventListener("click", clickHandlerBoard);

        this.updateScreen()

    }
    

}

screen = new ScreenController()
console.log("End of Script")
