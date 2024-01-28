import { Ship } from "./ship";
class Gameboard {
    orientations = ['v', 'h']
    constructor() {
        console.log("Creating Board")
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

    populateShips() {
        while (this.ships.length < 5) {
            let randomIndex = Math.floor(Math.random() * this.orientations.length);
            let randomOrient = this.orientations[randomIndex];
            let randomX = Math.floor(Math.random() * 10);
            let randomY = Math.floor(Math.random() * 10);
            let randomLen = Math.floor(Math.random() * 5) + 1;
    
            let isValid = this.validPlacement(randomLen, randomX, randomY, randomOrient);
            if (isValid[0] === true) {
                let ship = new Ship(randomLen, randomX, randomY, isValid[1]);
    
                // Mark cells as occupied by the ship
                for (let i = 0; i < randomLen; i++) {
                    if (isValid[1] === "vertical") {
                        this.board[randomX][randomY + i].placeShip(ship);
                    } else {
                        this.board[randomX + i][randomY].placeShip(ship);
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

    receiveAttack(x, y){
        if (x > this.rows || y > this.cols) {
            console.error("Invalid Hit: Out of Bounds") // Invalid placement, out of bounds or cell already occupied
        }
        let hit = this.board[x][y].strike()
        console.log("Attack at (" + x + "," + y + ") => " + hit )
    }

    allSunk(){
        for(i in this.ships){
            if(i.isSunk() == false){
                return false
            }
        }
        return true
    }
    
}

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.ship = null;
        this.misHit = false;
        this.value = '.'
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
            this.value = "H"
            return true
        }else{
            this.value = "M"
            return false
        }
    }
    
}

export { Gameboard };
