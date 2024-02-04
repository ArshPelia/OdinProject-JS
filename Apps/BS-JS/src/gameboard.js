import { Ship } from "./ship";


class Player {
    constructor(name) {
        this.name = name;
    }
}

class Gameboard {

    orientations = ['v', 'h']
    constructor(pname) {
        // console.log("Creating Board")
        let ROWS = 10;
        let COLS = 10; 
        this.rows = ROWS;
        this.cols = COLS;
        this.board = [];
        this.ships = [];
        this.player = new Player(pname);

        // Create empty board
        for (let i = 0; i < this.rows; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.board[i].push(new Cell()); // Use the 'new' keyword to instantiate Cell
            }
        }
        this.populateShips()
    }

    printToConsole() {
        const boardWithCellValues = this.board.map((row) => row.map((cell) => cell.getValue()));
        console.log(boardWithCellValues);
    }

    populateShips() {
        const shipLengths = [5, 4, 3, 3, 2];  // Adjust lengths as needed
        for (const len of shipLengths) {
            let isValid = false;
            while (!isValid) {
                const randomX = Math.floor(Math.random() * this.rows);
                const randomY = Math.floor(Math.random() * this.cols);
                const randomOrient = Math.random() < 0.5 ? 'h' : 'v';
    
                isValid = this.validPlacement(len, randomX, randomY, randomOrient);
                if (isValid[0]) {
                    const ship = new Ship(len, randomX, randomY, isValid[1]);
    
                    for (let i = 0; i < len; i++) {
                        if (isValid[1] === "vertical") {
                            this.board[randomX][randomY + i].placeShip(ship);
                        } else {
                            this.board[randomX + i][randomY].placeShip(ship);
                        }
                    }
                    this.ships.push(ship);
                }
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
            if (Y + Len >= this.cols) {
                return [false, ""];
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
    
    receiveAttack(idx){
        const x = Math.floor((idx - 1) / 10);
        const y = (idx - 1) % 10;
        if (x >= this.rows || y >= this.cols) {
            console.error("Invalid Hit: Out of Bounds");
            return -1;
        }
        
        let hit = this.board[x][y].strike()
        console.log("Attack at (" + x + "," + y + ") => " + hit )
        return hit
    }

    allSunk() {
        for (const ship of this.ships) {
            if (!ship.isSunk()) {
                return false;
            }
        }
        return true;
    }
    
    
}

class Cell {
    constructor() {
        this.ship = null;
        this.misHit = false;
        this.value = ''
    }

    placeShip(ship) {
        this.ship = ship;
        this.value = "X"
    }

    isOccupied() {
        return !!this.ship;
    }

    getValue() {
        return this.value;
    }

    strike(){
        if(this.isOccupied()){
            this.ship.hit()
            return true
        }else{
            this.misHit = true
            return false
        }
    }
    
}

export { Gameboard };

