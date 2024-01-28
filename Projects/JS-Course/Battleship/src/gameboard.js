import { Ship } from "./ship";
class Gameboard {
    orientations = ['v', 'h']
    constructor() {
        this.rows = 10;
        this.cols = 10;
        this.board = [];
        this.ships = [];

        // Create empty board
        for (let i = 0; i < this.rows; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.board[i].push(new Cell()); // Use the 'new' keyword to instantiate Cell
            }
        }
        this.populateShips()
    }

    // Print board to console
    printToConsole() {
        const boardWithCellValues = this.board.map((row) => row.map((cell) => cell.getValue()));
        console.log(boardWithCellValues);
    }

    populateShips(){
        while(this.ships.length < 5){
            var randomIndex = Math.floor(Math.random() * this.orientations.length); 
            var randomOrient = this.orientations[randomIndex];
            var randomX = Math.floor(Math.random() * 10);
            var randomY = Math.floor(Math.random() * 10);  
            var randomLen = Math.floor(Math.random() * 5) + 1;
    
            let isValid = this.validPlacement(randomLen, randomX, randomY, randomOrient)
            if (isValid[0] === true){
                let ship = new Ship(randomLen, randomX, randomY, isValid[1]);
                
                // Mark cells as occupied by the ship
                for (let i = 0; i < randomLen; i++) {
                    if (isValid[1] === "vertical") {
                        this.board[randomX][randomY + i].occupy(ship);
                    } else {
                        this.board[randomX + i][randomY].occupy(ship);
                    }
                }
                // Add the ship to the list of ships
                this.ships.push(ship);
            }
        }
    }
    

    validPlacement(Len, X, Y, Orient) {
        if (X + Len > this.rows || this.board[X][Y].isOccupied()) {
            return [false, ""]; // Invalid placement, out of bounds or cell already occupied
        }
    
        if (Orient == 'v') {
            // Check up
            for (let i = Y; i < Y + Len; i++) {
                if (i >= this.cols || this.board[X][i].isOccupied()) {
                    // Invalid placement, out of bounds or cell already occupied
                    return [false, ""];
                }
            }
    
            // Check down
            for (let j = Y; j < Y + Len; j++) {
                if (j >= this.cols || this.board[X][j].isOccupied()) {
                    // Invalid placement, out of bounds or cell already occupied
                    return [false, ""];
                }
            }
    
            return [true, "vertical"];
        } else {
            // Check right
            for (let i = X; i < X + Len; i++) {
                if (i >= this.rows || this.board[i][Y].isOccupied()) {
                    // Invalid placement, out of bounds or cell already occupied
                    return [false, ""];
                }
            }
    
            // Check left
            for (let j = X; j < X + Len; j++) {
                if (j >= this.rows || this.board[j][Y].isOccupied()) {
                    // Invalid placement, out of bounds or cell already occupied
                    return [false, ""];
                }
            }
    
            return [true, "horizontal"];
        }
    }
    
}

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.occupiedBy = null;
        this.misHit = false;
    }

    occupy(ship) {
        this.occupiedBy = ship;
    }

    isOccupied() {
        return !!this.occupiedBy;
    }

    getValue() {
        return this.occupiedBy ? 'X' : '.';
    }
    
}

export { Gameboard };
