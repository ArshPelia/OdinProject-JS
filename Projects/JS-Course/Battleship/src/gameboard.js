class Gameboard{
    rows = 10
    cols = 10
    board = []
    constructor(){
        this.rows= rows
        this.cols = cols
        this.board = board
        //create empty board
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
              board[i].push(Cell());
            }
          }
    }
    //print board to console
    printToConsole(){
        const boardWithCellValues = this.board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
    }
}

class Cell {
    x;
    y;
    occupiedBy = null;
    constructor(){
        this.occupiedBy = occupiedBy;
    }
    
}