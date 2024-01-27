class Gameboard {
    constructor() {
        this.rows = 10;
        this.cols = 10;
        this.board = [];

        // Create empty board
        for (let i = 0; i < this.rows; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.board[i].push(new Cell()); // Use the 'new' keyword to instantiate Cell
            }
        }
    }

    // Print board to console
    printToConsole() {
        const boardWithCellValues = this.board.map((row) => row.map((cell) => cell.getValue()));
        console.log(boardWithCellValues);
    }

    populateShips(){
        
    }
}

class Cell {
    x;
    y;
    occupiedBy = null;

    // You might want to add a getValue method to the Cell class
    getValue() {
        // Implement the logic to get the value of the cell (e.g., if it's occupied by a ship)
        return this.occupiedBy ? 'X' : '.';
    }
}

export { Gameboard };
